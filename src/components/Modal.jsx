import { useEffect, useRef } from "react";

export default function Modal({ open, onClose, children, label }) {
  const ref = useRef(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <dialog
      ref={ref}
      aria-label={label}
      onClose={onClose}
      onClick={(e) => e.target === ref.current && onClose()}
      className="m-auto w-[min(34rem,calc(100vw-1.5rem))] max-h-[calc(100vh-2rem)] rounded-2xl bg-sheet p-0 text-body backdrop:bg-ink/50"
    >
      {open && (
        <div className="relative p-5 sm:p-7">
          <button type="button" onClick={onClose} className="absolute right-3 top-3 px-2 py-1 text-sm text-ink/60 hover:text-ink" aria-label="Close">
            Close
          </button>
          {children}
        </div>
      )}
    </dialog>
  );
}
