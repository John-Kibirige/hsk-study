export function shuffle(list) {
  const copy = [...list];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export const hasChinese = (text) => /[\u3400-\u9fff]/.test(text);

export const canSpeak = () => typeof window !== "undefined" && "speechSynthesis" in window;

// Reads Chinese aloud with the device's built-in voice, if it has one.
export function speak(text) {
  if (!canSpeak()) return;
  const synth = window.speechSynthesis;
  synth.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "zh-CN";
  u.rate = 0.85;
  const voice = synth.getVoices().find((v) => v.lang.toLowerCase().replace("_", "-").startsWith("zh"));
  if (voice) u.voice = voice;
  synth.speak(u);
}
