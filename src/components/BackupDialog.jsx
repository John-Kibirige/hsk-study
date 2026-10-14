import { useRef, useState } from "react";
import Modal from "./Modal.jsx";

// Progress lives in each browser's localStorage, so phone and laptop each keep their own.
// This dialog saves it to a file and loads it back, so you can move progress between devices.
export const STORAGE_KEYS = ["hsk-cards-records-v1", "hsk-cards-settings-v1", "hsk-grammar-progress-v1", "hsk-grammar-last-v1"];

function exportProgress() {
  const data = {};
  for (const key of STORAGE_KEYS) {
    const value = localStorage.getItem(key);
    if (value !== null) data[key] = JSON.parse(value);
  }
  const blob = new Blob([JSON.stringify({ app: "hsk-study", version: 1, exportedAt: new Date().toISOString(), data }, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `hsk-study-progress-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export default function BackupDialog({ open, onClose }) {
  const input = useRef(null);
  const [message, setMessage] = useState("");

  async function importProgress(file) {
    try {
      const parsed = JSON.parse(await file.text());
      if (parsed?.app !== "hsk-study" || typeof parsed.data !== "object") throw new Error("not ours");
      if (!window.confirm("Replace the progress on this device with the progress in this file?")) return;
      for (const key of STORAGE_KEYS) {
        if (key in parsed.data) localStorage.setItem(key, JSON.stringify(parsed.data[key]));
      }
      window.location.reload();
    } catch {
      setMessage("That file isn't an HSK Study progress file. Choose a file saved with Save progress.");
    }
  }

  return (
    <Modal open={open} onClose={onClose} label="Back up progress">
      <h2 className="text-2xl font-semibold text-ink pr-12">Your progress</h2>
      <p className="mt-3 leading-relaxed">
        Progress is saved on each device separately. To continue on another device, save your progress here, send the file to that
        device, and load it there.
      </p>
      <div className="mt-6 grid gap-3">
        <button type="button" onClick={exportProgress} className="px-5 py-3 rounded-xl bg-ink text-white font-medium">
          Save progress to a file
        </button>
        <button type="button" onClick={() => input.current?.click()} className="px-5 py-3 rounded-xl border-2 border-ink text-ink font-medium">
          Load progress from a file
        </button>
        <input
          ref={input}
          type="file"
          accept="application/json,.json"
          className="hidden"
          onChange={(e) => e.target.files?.[0] && importProgress(e.target.files[0])}
        />
      </div>
      {message && (
        <p className="mt-4 text-sm text-cinnabar" role="alert">
          {message}
        </p>
      )}
    </Modal>
  );
}
