let context: AudioContext | undefined;
let lastPlayed = 0;

export function playSoftClick() {
  if (typeof window === "undefined") return;
  const now = performance.now();
  if (now - lastPlayed < 45) return;
  lastPlayed = now;

  try {
    const AudioContextConstructor = window.AudioContext || (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextConstructor) return;
    context ??= new AudioContextConstructor();
    if (context.state === "suspended") void context.resume();

    const start = context.currentTime;
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    const filter = context.createBiquadFilter();
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(880, start);
    oscillator.frequency.exponentialRampToValueAtTime(590, start + 0.055);
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(1500, start);
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(0.045, start + 0.008);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.085);
    oscillator.connect(filter);
    filter.connect(gain);
    gain.connect(context.destination);
    oscillator.start(start);
    oscillator.stop(start + 0.09);
  } catch {
    // Audio is an optional accent; unsupported or blocked playback never blocks an action.
  }
}
