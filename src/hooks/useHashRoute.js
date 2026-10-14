import { useCallback, useEffect, useState } from "react";

// Hash routes (#/cards, #/grammar/hsk3-11-1) work on GitHub Pages without any server setup.
function read() {
  const parts = window.location.hash.replace(/^#\/?/, "").split("/").filter(Boolean);
  return { page: parts[0] || "cards", param: parts[1] ? decodeURIComponent(parts[1]) : null };
}

export default function useHashRoute() {
  const [route, setRoute] = useState(read);

  useEffect(() => {
    const onChange = () => setRoute(read());
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  const navigate = useCallback((page, param) => {
    window.location.hash = param ? `#/${page}/${encodeURIComponent(param)}` : `#/${page}`;
  }, []);

  return [route, navigate];
}
