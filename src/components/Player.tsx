import { useState, useEffect, useRef } from 'react';
import type { HoodType } from '../types';
import { fileUrl } from '../lib/api';
import '../styles/colors-and-type.scss';

function Player({ hood }: { hood: HoodType }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  // const [currentTime, setCurrentTime] = useState<number>(0);
  // const [duration, setDuration] = useState<number>(0);
  const [isMuted, setIsMuted] = useState<boolean>(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // const updateTime = () => setCurrentTime(audio.currentTime);
    // const updateDuration = () => setDuration(audio.duration || 0);
    // const handleEnded = () => setIsPlaying(false);

    // audio.addEventListener('timeupdate', updateTime);
    // audio.addEventListener('loadedmetadata', updateDuration);
    // audio.addEventListener('ended', handleEnded);

    // return () => {
    //   audio.removeEventListener('timeupdate', updateTime);
    //   audio.removeEventListener('loadedmetadata', updateDuration);
    //   audio.removeEventListener('ended', handleEnded);
    // };
  }, []);

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

  // console.log('hood: ', hood);
  return (
    <>
      {/* <audio ref={audioRef} src={src} preload="metadata" /> */}
      {hood.themeSong ? (
        <audio
          ref={audioRef}
          src={fileUrl(hood.themeSong)}
          controls
          preload="metadata"
        />
      ) : null}
      <div>
        <div className={`bw-voice bw-voice`}>
          <button
            type="button"
            className="bw-voice-btn"
            aria-label={isPlaying ? 'Pause' : 'Play'}
            onClick={togglePlay}
          >
            {isPlaying ? (
              <svg
                viewBox="0 0 24 24"
                width="22"
                height="22"
                aria-hidden="true"
              >
                <rect
                  x="6"
                  y="5"
                  width="4.5"
                  height="14"
                  rx="1"
                  fill="currentColor"
                />
                <rect
                  x="13.5"
                  y="5"
                  width="4.5"
                  height="14"
                  rx="1"
                  fill="currentColor"
                />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                width="22"
                height="22"
                aria-hidden="true"
              >
                <path d="M7 5 L19 12 L7 19 Z" fill="currentColor" />
              </svg>
            )}
          </button>

          <div className="bw-voice-stack">
            <div className="bw-voice-label">label</div>
            <div
              className="bw-voice-wave"
              role="slider"
              aria-valuemin={0}
              // aria-valuemax={Math.round(duration)}
              // aria-valuenow={Math.round(elapsed)}
              // onClick={(e) => {
              //   const r = e.currentTarget.getBoundingClientRect();
              //   const x = (e.clientX - r.left) / r.width;
              //   setElapsed(Math.max(0, Math.min(duration, x * duration)));
              // }}
            >
              {/* {bars.map((h, i) => {
            const reached = (i / bars.length) * 100 <= pct;
            return (
              <span
                key={i}
                className={`bw-voice-bar ${reached ? 'is-on' : ''}`}
                style={{ height: `${Math.round(h * 100)}%` }}
              />
            );
          })} */}
            </div>
          </div>

          {/* Mute/Volume Button */}
          <button
            onClick={toggleMute}
            className="p-2 text-slate-400 hover:text-white transition-colors focus:outline-none"
            aria-label={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? (
              <svg
                viewBox="0 0 24 24"
                width="22"
                height="22"
                aria-hidden="true"
              >
                <rect
                  x="6"
                  y="5"
                  width="4.5"
                  height="14"
                  rx="1"
                  fill="currentColor"
                />
                <rect
                  x="13.5"
                  y="5"
                  width="4.5"
                  height="14"
                  rx="1"
                  fill="currentColor"
                />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                width="22"
                height="22"
                aria-hidden="true"
              >
                <path d="M7 5 L19 12 L7 19 Z" fill="currentColor" />
              </svg>
            )}
            {/* {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />} */}
          </button>

          <div className="bw-voice-time">
            {/* <span>{fmt(elapsed)}</span> */}
            <span className="bw-voice-time-sep">/</span>
            {/* <span>{fmt(duration)}</span> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Player;
