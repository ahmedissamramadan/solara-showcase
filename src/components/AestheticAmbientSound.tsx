import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Waves, Sparkles } from 'lucide-react';

export const AestheticAmbientSound: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const filterNodeRef = useRef<BiquadFilterNode | null>(null);
  const lfoRef = useRef<OscillatorNode | null>(null);

  const initAudio = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      // Create Buffer for Gentle Pink/Brown Waves Noise
      const bufferSize = ctx.sampleRate * 4;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      let lastOut = 0.0;

      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        // Brown noise filter
        data[i] = (lastOut + 0.02 * white) / 1.02;
        lastOut = data[i];
        data[i] *= 1.5; // Gain adjustment
      }

      const noiseSource = ctx.createBufferSource();
      noiseSource.buffer = buffer;
      noiseSource.loop = true;

      // Bandpass Filter simulating gentle ocean surf
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(400, ctx.currentTime);
      filterNodeRef.current = filter;

      // LFO for wave modulation
      const lfo = ctx.createOscillator();
      lfo.frequency.setValueAtTime(0.12, ctx.currentTime); // Wave every ~8 seconds
      const lfoGain = ctx.createGain();
      lfoGain.gain.setValueAtTime(250, ctx.currentTime);
      lfo.connect(filter.frequency);
      lfoRef.current = lfo;

      // Main Gain
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gainNodeRef.current = gain;

      // Connect graph
      noiseSource.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      noiseSource.start();
      lfo.start();
    } catch (e) {
      console.warn('Web Audio API not permitted before interaction', e);
    }
  };

  const toggleSound = () => {
    if (!audioCtxRef.current) {
      initAudio();
      setIsPlaying(true);
      return;
    }

    if (isPlaying) {
      if (audioCtxRef.current.state === 'running') {
        audioCtxRef.current.suspend();
      }
      setIsPlaying(false);
    } else {
      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }
      setIsPlaying(true);
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-40">
      <button
        onClick={toggleSound}
        className="group relative flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel border border-solara-gold/30 hover:border-solara-gold text-slate-300 hover:text-white shadow-luxury backdrop-blur-xl transition-all hover:scale-105"
        title="Ambient Mediterranean Ocean Waves Sound"
      >
        <div className="relative flex items-center justify-center">
          {isPlaying ? (
            <>
              <Waves className="w-4 h-4 text-solara-gold animate-pulse" />
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-solara-gold animate-ping" />
            </>
          ) : (
            <VolumeX className="w-4 h-4 text-slate-400 group-hover:text-solara-gold" />
          )}
        </div>

        <div className="text-right text-[11px]">
          <span className="font-semibold block text-slate-200 group-hover:text-solara-gold-light">
            {isPlaying ? 'أجواء الساحل والأمواج' : 'تشغيل الأجواء الصوتية'}
          </span>
          <span className="text-[9px] text-slate-400 font-mono">
            {isPlaying ? 'Coastal Ocean Audio (Active)' : 'Muted'}
          </span>
        </div>

        {isPlaying && (
          <div className="flex items-end gap-0.5 h-3">
            <span className="w-0.5 bg-solara-gold h-2 animate-pulse" />
            <span className="w-0.5 bg-solara-gold h-3.5 animate-pulse delay-75" />
            <span className="w-0.5 bg-solara-gold h-1.5 animate-pulse delay-150" />
          </div>
        )}
      </button>
    </div>
  );
};
