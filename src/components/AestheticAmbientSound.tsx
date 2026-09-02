import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Waves, Sliders, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface AestheticAmbientSoundProps {
  onSoundStateChange?: (isActive: boolean) => void;
}

export const AestheticAmbientSound: React.FC<AestheticAmbientSoundProps> = ({ onSoundStateChange }) => {
  const { language, isRTL, t } = useLanguage();
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.15); // Default comfortable volume
  const [showVolumeSlider, setShowVolumeSlider] = useState<boolean>(false);

  const audioCtxRef = useRef<AudioContext | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);
  const filterNodeRef = useRef<BiquadFilterNode | null>(null);
  const foamFilterRef = useRef<BiquadFilterNode | null>(null);
  const lfoRef = useRef<OscillatorNode | null>(null);

  const initAudio = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      // 1. Generate 6 seconds of Brown / Pink Noise buffer for realistic ocean swell
      const bufferSize = ctx.sampleRate * 6;
      const buffer = ctx.createBuffer(2, bufferSize, ctx.sampleRate);
      const leftChannel = buffer.getChannelData(0);
      const rightChannel = buffer.getChannelData(1);

      let lastOutL = 0.0;
      let lastOutR = 0.0;

      for (let i = 0; i < bufferSize; i++) {
        const whiteL = Math.random() * 2 - 1;
        const whiteR = Math.random() * 2 - 1;

        // Brown noise integration for deep ocean rumble
        leftChannel[i] = (lastOutL + 0.025 * whiteL) / 1.025;
        rightChannel[i] = (lastOutR + 0.025 * whiteR) / 1.025;

        lastOutL = leftChannel[i];
        lastOutR = rightChannel[i];

        leftChannel[i] *= 1.6;
        rightChannel[i] *= 1.6;
      }

      const noiseSource = ctx.createBufferSource();
      noiseSource.buffer = buffer;
      noiseSource.loop = true;

      // 2. Primary Low-pass Filter mimicking the bulk wave body
      const mainFilter = ctx.createBiquadFilter();
      mainFilter.type = 'lowpass';
      mainFilter.frequency.setValueAtTime(320, ctx.currentTime);
      mainFilter.Q.setValueAtTime(2.5, ctx.currentTime);
      filterNodeRef.current = mainFilter;

      // 3. High-pass Filter for subtle shore hiss & foam
      const foamFilter = ctx.createBiquadFilter();
      foamFilter.type = 'bandpass';
      foamFilter.frequency.setValueAtTime(1200, ctx.currentTime);
      foamFilter.Q.setValueAtTime(1.0, ctx.currentTime);
      foamFilterRef.current = foamFilter;

      // 4. Rhythmic LFO simulating Mediterranean ocean swell (~7.5s cycle)
      const lfo = ctx.createOscillator();
      lfo.frequency.setValueAtTime(0.13, ctx.currentTime); // Wave every ~7.5 seconds
      const lfoGain = ctx.createGain();
      lfoGain.gain.setValueAtTime(220, ctx.currentTime);
      lfo.connect(mainFilter.frequency);
      lfoRef.current = lfo;

      // 5. Master Gain Node with user volume
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(volume, ctx.currentTime);
      masterGainRef.current = masterGain;

      // 6. Connect audio nodes
      noiseSource.connect(mainFilter);
      noiseSource.connect(foamFilter);
      mainFilter.connect(masterGain);
      foamFilter.connect(masterGain);
      masterGain.connect(ctx.destination);

      noiseSource.start();
      lfo.start();
    } catch (e) {
      console.warn('Web Audio API requires user interaction to initialize', e);
    }
  };

  const toggleSound = () => {
    if (!audioCtxRef.current) {
      initAudio();
      setIsPlaying(true);
      onSoundStateChange?.(true);
      return;
    }

    if (isPlaying) {
      if (audioCtxRef.current.state === 'running') {
        audioCtxRef.current.suspend();
      }
      setIsPlaying(false);
      onSoundStateChange?.(false);
    } else {
      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }
      setIsPlaying(true);
      onSoundStateChange?.(true);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVol = parseFloat(e.target.value);
    setVolume(newVol);
    if (masterGainRef.current && audioCtxRef.current) {
      masterGainRef.current.gain.setValueAtTime(newVol, audioCtxRef.current.currentTime);
    }
  };

  return (
    <div className={`fixed bottom-6 z-40 flex items-center gap-2 ${isRTL ? 'left-6' : 'right-6'}`}>
      
      {/* Volume Slider Popup */}
      {showVolumeSlider && (
        <div className="glass-panel p-3 rounded-2xl border border-solara-gold/30 shadow-luxury flex items-center gap-2.5 backdrop-blur-2xl bg-solara-navy-dark/95">
          <VolumeX className="w-3.5 h-3.5 text-slate-400" />
          <input
            type="range"
            min="0"
            max="0.4"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="w-20 accent-solara-gold h-1 cursor-pointer"
          />
          <Volume2 className="w-3.5 h-3.5 text-solara-gold" />
        </div>
      )}

      {/* Main Coastal Waves Control Pill */}
      <div className="flex items-center gap-1.5 p-1 rounded-full glass-panel border border-solara-gold/30 hover:border-solara-gold shadow-luxury backdrop-blur-2xl bg-solara-navy-dark/95 transition-all">
        
        {/* Toggle Play/Pause Button */}
        <button
          onClick={toggleSound}
          className="flex items-center gap-3 px-4 py-2 rounded-full hover:bg-white/5 text-slate-200 hover:text-white transition-all group"
          title={t('Toggle Mediterranean Ocean Waves Ambient Sound', 'تشغيل / إيقاف صوت أمواج البحر الأبيض المتوسط')}
        >
          <div className="relative flex items-center justify-center">
            {isPlaying ? (
              <>
                <Waves className="w-4 h-4 text-solara-gold animate-pulse" />
                <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              </>
            ) : (
              <VolumeX className="w-4 h-4 text-slate-400 group-hover:text-solara-gold transition-colors" />
            )}
          </div>

          <div className={`text-[11px] ${isRTL ? 'text-right' : 'text-left'}`}>
            <span className="font-bold block text-slate-200 group-hover:text-solara-gold-light transition-colors">
              {isPlaying 
                ? t('Sahel Shoreline Ambient Surf', 'أجواء وأمواج الساحل') 
                : t('Play Ocean Soundscape', 'تشغيل أصوات البحر')}
            </span>
            <span className="text-[9px] text-slate-400 font-mono">
              {isPlaying ? t('Mediterranean Waves Active', 'أمواج البحر نشطة') : t('Atmospheric Soundscape', 'صوت الأمواج هادئ')}
            </span>
          </div>

          {/* Animated Wave Equalizer Bars */}
          {isPlaying && (
            <div className="flex items-end gap-1 h-3.5 px-1">
              <span className="w-0.5 bg-solara-gold h-2 animate-pulse" />
              <span className="w-0.5 bg-solara-gold-light h-3.5 animate-pulse delay-75" />
              <span className="w-0.5 bg-solara-gold h-1.5 animate-pulse delay-150" />
              <span className="w-0.5 bg-solara-gold-light h-3 animate-pulse delay-200" />
            </div>
          )}
        </button>

        {/* Volume Popup Toggle */}
        <button
          onClick={() => setShowVolumeSlider(!showVolumeSlider)}
          className="p-2 rounded-full hover:bg-white/10 text-slate-400 hover:text-solara-gold transition-colors"
          title={t('Adjust Ambient Volume', 'تعديل مستوى الصوت')}
        >
          <Sliders className="w-3.5 h-3.5" />
        </button>

      </div>

    </div>
  );
};
