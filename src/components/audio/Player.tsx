import { useState, useEffect, useRef, useMemo } from 'react';
import type { HoodType, ResidentType } from '../../types';
import { fileUrl } from '../../lib/api';
import { getTaglines } from '@/helperFunctions/getTaglines';
import Stamp from '../branding/stamp';
import Music from '@/assets/svgs/music';
import Voice from '@/assets/svgs/voice';
import Pause from '@/assets/svgs/pause';
import Play from '@/assets/svgs/play';
import Mute from '@/assets/svgs/mute';
import Muted from '@/assets/svgs/muted';
import '@/styles/colors-and-type.scss';
import '@/styles/voice-player.css';

const WAVEFORM_BARS = Array.from(
  { length: 56 },
  () => 0.25 + Math.random() * 0.75,
);

function Player({
  source,
  audiotype,
}: {
  source: HoodType | ResidentType;
  audiotype: string;
}) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [isMuted, setIsMuted] = useState<boolean>(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration || 0);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  const pct = (currentTime / duration) * 100;

  const formatTime = (time: number): string => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  // 56 bars at ~3-4px each — proper waveform density
  const bars = WAVEFORM_BARS;

  const togglePlay = (): void => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current
        .play()
        .catch((error) => console.log('Playback prevented:', error));
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = (): void => {
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const tagline = useMemo(
    () =>
      getTaglines(
        source._type === 'resident' ? 'resident' : 'hood',
        source.name,
        audiotype,
      ),
    [source._type, source.name],
  );

  return (
    <div className="relative">
      <Stamp lineOne="From" lineTwo="the Block" usage="player" />
      {source._type === 'resident' &&
      source.voiceFile &&
      audiotype === 'voice' ? (
        <audio
          ref={audioRef}
          src={fileUrl(source.voiceFile)}
          preload="metadata"
        />
      ) : source._type === 'resident' &&
        source.voiceMusicFile &&
        audiotype === 'music' ? (
        <audio
          ref={audioRef}
          src={fileUrl(source.voiceMusicFile)}
          preload="metadata"
        />
      ) : source._type === 'neighborhood' && source.themeSong ? (
        <audio
          ref={audioRef}
          src={fileUrl(source.themeSong)}
          preload="metadata"
        />
      ) : null}
      <div className={`vp`}>
        {/* <div
        className={`vp${isMuted ? ' is-muted' : ''}$isPlaying ? ' is-playing' : ''}`}
        data-variant={variant}
      ></div> */}
        {/* Row 1 — title */}
        <div className="vp-head">
          <span className="vp-note">
            {source._type === 'resident' ? <Voice /> : <Music />}
          </span>
          <span className="vp-label">{tagline}</span>
        </div>

        {/* Row 2 — waveform / scrubber */}
        <div
          className="vp-wave"
          role="slider"
          tabIndex={0}
          // aria-label={`Seek ${label}`}
          aria-valuemin={0}
          aria-valuemax={Math.round(currentTime)}
          aria-valuenow={Math.round(currentTime)}
          onClick={(e) => {
            if (!audioRef.current || !duration) return;
            const r = e.currentTarget.getBoundingClientRect();
            const x = (e.clientX - r.left) / r.width;
            const newTime = Math.max(0, Math.min(duration, x * duration));
            audioRef.current.currentTime = newTime;
            setCurrentTime(newTime);
          }}
        >
          {bars.map((h, i) => {
            const reached = (i / bars.length) * 100 <= pct;
            return (
              <span
                key={i}
                className={`bw-voice-bar ${reached ? 'is-on' : ''}`}
                style={{ height: `${Math.round(h * 100)}%` }}
              />
            );
          })}
        </div>

        {/* Row 3 — transport */}
        <div className="vp-transport">
          <button
            type="button"
            className="vp-play"
            aria-label={isPlaying ? 'Pause' : 'Play'}
            onClick={togglePlay}
          >
            {isPlaying ? <Play /> : <Pause />}
          </button>

          <div className="vp-right">
            <span className="vp-time">
              <span>{formatTime(currentTime)}</span>
              <span className="bw-voice-time-sep">/</span>
              <span>{formatTime(duration)}</span>
            </span>
          </div>

          <div>
            <button
              onClick={toggleMute}
              className="vp-mute"
              aria-label={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? <Muted /> : <Mute />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Player;
