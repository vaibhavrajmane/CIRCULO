type SpeechCallback = (state: { isPlaying: boolean; activeId: string | null; error?: string }) => void;

class NarrationService {
  private synth: SpeechSynthesis | null = null;
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private activeId: string | null = null;
  private listeners: SpeechCallback[] = [];
  private rate: number = 1.0;

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.synth = window.speechSynthesis;
    }
  }

  public isSupported(): boolean {
    return this.synth !== null;
  }

  public subscribe(cb: SpeechCallback) {
    this.listeners.push(cb);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== cb);
    };
  }

  private notify(isPlaying: boolean, error?: string) {
    this.listeners.forEach((cb) => cb({ isPlaying, activeId: this.activeId, error }));
  }

  public setRate(newRate: number) {
    this.rate = newRate;
    if (this.currentUtterance && this.synth && this.synth.speaking) {
      // update rate next time or restart
    }
  }

  public getRate(): number {
    return this.rate;
  }

  public speak(id: string, text: string) {
    if (!this.synth) {
      this.notify(false, 'Speech synthesis not supported in this browser.');
      return;
    }

    // Stop current speech
    this.stop();

    this.activeId = id;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = this.rate;
    utterance.pitch = 1.0;
    utterance.lang = 'en-US';

    // Try finding natural english voices
    const voices = this.synth.getVoices();
    const naturalVoice = voices.find(
      (v) => v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Samantha') || v.name.includes('Guy'))
    ) || voices.find((v) => v.lang.startsWith('en'));

    if (naturalVoice) {
      utterance.voice = naturalVoice;
    }

    utterance.onstart = () => {
      this.notify(true);
    };

    utterance.onend = () => {
      this.activeId = null;
      this.currentUtterance = null;
      this.notify(false);
    };

    utterance.onerror = (e) => {
      console.warn('SpeechSynthesis error:', e);
      this.activeId = null;
      this.currentUtterance = null;
      this.notify(false, 'Voice synthesis interrupted or finished.');
    };

    this.currentUtterance = utterance;
    this.synth.speak(utterance);
  }

  public stop() {
    if (this.synth) {
      this.synth.cancel();
    }
    this.activeId = null;
    this.currentUtterance = null;
    this.notify(false);
  }

  public getActiveId(): string | null {
    return this.activeId;
  }
}

export const narrationService = new NarrationService();
