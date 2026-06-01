/* global React */
// ───────────────────────────────────────────────────────────────────────────
// VoicePlayer — ONE reusable audio player for Betwixt.
//
// Same structure + behaviour everywhere. The LOOK is driven entirely by the
// `variant` prop, which only swaps CSS custom properties (see voice-player.css).
//
//   <VoicePlayer label="Walk through Weirdford" src="/audio/weirdford.mp3" variant="hood" />
//   <VoicePlayer label="Hear Zaman"             src="/audio/zaman.mp3"     variant="resident" />
//
// Real <audio> element underneath — play / pause / mute / scrub are native.
// Drop this straight into your audio-wired page; just pass a real `src`.
// ───────────────────────────────────────────────────────────────────────────
const { useState: useStateVP, useRef: useRefVP, useEffect: useEffectVP } = React;

function vpFmt(s) {
  if (!isFinite(s)) s = 0;
  const m = Math.floor(s / 60);
  const r = Math.floor(s % 60);
  return `${m}:${r.toString().padStart(2, '0')}`;
}

// Stable-per-instance bar heights for the waveform.
function vpMakeBars(n, seed) {
  let x = seed * 9301 + 49297;
  const rnd = () => { x = (x * 9301 + 49297) % 233280; return x / 233280; };
  // a gentle envelope so it reads like a spoken-word waveform, not white noise
  return Array.from({ length: n }, (_, i) => {
    const env = 0.55 + 0.45 * Math.sin((i / n) * Math.PI * 3.2 + seed);
    return Math.max(0.18, Math.min(1, (0.3 + rnd() * 0.7) * env));
  });
}

// Head icon — music note for hoods (theme songs), microphone for resident voices.
function VpIcon({ kind }) {
  if (kind === 'voice') {
    return (
      <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true">
        <rect x="9" y="2.5" width="6" height="11" rx="3" fill="currentColor" />
        <path d="M5.5 11 A6.5 6.5 0 0 0 18.5 11" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="12" y1="17.5" x2="12" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="8.5" y1="21" x2="15.5" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true">
      <path d="M9 16.5 V4.5 L20 2.2 V14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <circle cx="6.4" cy="16.6" r="2.8" fill="currentColor" />
      <circle cx="17.4" cy="14.1" r="2.8" fill="currentColor" />
    </svg>
  );
}

// Rubber-stamp roundel — double ring, arced top label, display-font center bite.
// Pass your own via the `stamp` prop: { top: 'IN THEIR', main: ['own', 'words'] }
function VpStamp({ top, main, uid }) {
  const arcId = `vpArc-${uid}`;
  const lines = main || [];
  return (
    <svg className="vp-stamp" viewBox="0 0 100 100" aria-hidden="true">
      <circle cx="50" cy="50" r="47" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="50" cy="50" r="41" fill="none" stroke="currentColor" strokeWidth="1.1" />
      <path id={arcId} d="M18,50 A32,32 0 0 1 82,50" fill="none" />
      <text className="vp-stamp-top" textAnchor="middle">
        <textPath href={`#${arcId}`} startOffset="50%">{top}</textPath>
      </text>
      {lines.map((ln, i) => (
        <text
          key={i}
          className={`vp-stamp-main vp-stamp-main-${i}`}
          x="50"
          y={lines.length > 1 ? 54 + i * 17 : 60}
          textAnchor="middle"
        >{ln}</text>
      ))}
    </svg>
  );
}

const VP_STAMPS = {
  hood:     { top: 'STRAIGHT FROM', main: ['the', 'block'] },
  resident: { top: 'IN THEIR', main: ['own', 'words'] },
};

function VoicePlayer({ label, src, variant = 'hood', icon, stamp, transcript, barCount = 52, seed = 7 }) {
  const iconKind = icon || (variant === 'resident' ? 'voice' : 'music');
  const stampData = stamp || VP_STAMPS[variant] || VP_STAMPS.hood;
  const cues = transcript || [];
  const ccId = `vp-cc-${variant}-${seed}`;
  const audioRef = useRefVP(null);
  const ccRef = useRefVP(null);
  const [playing, setPlaying] = useStateVP(false);
  const [muted, setMuted] = useStateVP(false);
  const [showCC, setShowCC] = useStateVP(true);
  const [elapsed, setElapsed] = useStateVP(0);
  const [duration, setDuration] = useStateVP(0);
  const bars = useRefVP(vpMakeBars(barCount, seed)).current;

  // Which transcript line is currently being spoken.
  let activeIdx = -1;
  for (let i = 0; i < cues.length; i++) {
    if (cues[i].t <= elapsed) activeIdx = i; else break;
  }

  // Keep the active caption line scrolled into view (manual scrollTop, not scrollIntoView).
  useEffectVP(() => {
    if (!showCC) return;
    const c = ccRef.current;
    if (!c) return;
    const el = c.querySelector('.vp-cc-line.is-active');
    if (!el) return;
    const top = el.offsetTop - c.clientHeight / 2 + el.offsetHeight / 2;
    c.scrollTop = Math.max(0, top);
  }, [activeIdx, showCC]);

  // Keep the <audio> element's muted flag in sync with state.
  useEffectVP(() => {
    if (audioRef.current) audioRef.current.muted = muted;
  }, [muted]);

  const togglePlay = () => {
    const a = audioRef.current;
    if (!a) return;
    if (a.paused) { a.play().catch(() => {}); } else { a.pause(); }
  };

  const seek = (e) => {
    const a = audioRef.current;
    if (!a || !duration) return;
    const r = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(1, (e.clientX - r.left) / r.width));
    a.currentTime = x * duration;
    setElapsed(a.currentTime);
  };

  const seekTo = (sec) => {
    const a = audioRef.current;
    if (!a) return;
    a.currentTime = sec;
    setElapsed(sec);
  };

  const pct = duration ? (elapsed / duration) * 100 : 0;

  return (
    <div className={`vp${muted ? ' is-muted' : ''}${playing ? ' is-playing' : ''}`} data-variant={variant}>
      <audio
        ref={audioRef}
        src={src}
        loop
        preload="metadata"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onTimeUpdate={(e) => setElapsed(e.currentTarget.currentTime)}
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
        onEnded={() => setPlaying(false)}
      />

      {/* Decorative layer — soft shapes, skinned per variant */}
      <div className="vp-deco" aria-hidden="true">
        <span className="vp-deco-circle"></span>
        <span className="vp-deco-rect"></span>
      </div>

      {/* Rubber-stamp roundel — the clever bite */}
      <VpStamp top={stampData.top} main={stampData.main} uid={`${variant}-${seed}`} />

      {/* Row 1 — title */}
      <div className="vp-head">
        <span className="vp-note"><VpIcon kind={iconKind} /></span>
        <span className="vp-label">{label}</span>
      </div>

      {/* Row 2 — waveform / scrubber */}
      <div
        className="vp-wave"
        role="slider"
        tabIndex={0}
        aria-label={`Seek ${label}`}
        aria-valuemin={0}
        aria-valuemax={Math.round(duration)}
        aria-valuenow={Math.round(elapsed)}
        onClick={seek}
      >
        {bars.map((h, i) => {
          const on = (i / bars.length) * 100 <= pct;
          return (
            <span
              key={i}
              className={`vp-bar${on ? ' is-on' : ''}`}
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
          aria-label={playing ? 'Pause' : 'Play'}
          onClick={togglePlay}
        >
          {playing ? (
            <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
              <rect x="6.5" y="5" width="4.2" height="14" rx="1.2" fill="currentColor" />
              <rect x="13.3" y="5" width="4.2" height="14" rx="1.2" fill="currentColor" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
              <path d="M7.5 5.2 L19 12 L7.5 18.8 Z" fill="currentColor" />
            </svg>
          )}
        </button>

        <div className="vp-right">
          <span className="vp-time">
            <span className="vp-time-now">{vpFmt(elapsed)}</span>
            <span className="vp-time-sep">/</span>
            <span className="vp-time-dur">{vpFmt(duration)}</span>
          </span>

          {cues.length > 0 && (
            <button
              type="button"
              className="vp-cc-toggle"
              aria-pressed={showCC}
              aria-expanded={showCC}
              aria-controls={ccId}
              aria-label={showCC ? 'Hide transcript' : 'Show transcript'}
              onClick={() => setShowCC((s) => !s)}
            >CC</button>
          )}

          <button
            type="button"
            className="vp-mute"
            aria-label={muted ? 'Unmute' : 'Mute'}
            aria-pressed={muted}
            onClick={() => setMuted((m) => !m)}
          >
            {muted ? (
              <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                <path d="M4 9 H7 L11.5 5 V19 L7 15 H4 Z" fill="currentColor" />
                <line x1="15" y1="9" x2="21" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="21" y1="9" x2="15" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                <path d="M4 9 H7 L11.5 5 V19 L7 15 H4 Z" fill="currentColor" />
                <path d="M14.5 8.5 Q16.5 12 14.5 15.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M17.2 6.5 Q20.5 12 17.2 17.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Transcript — scrolling captions, the text alternative to the audio */}
      {cues.length > 0 && showCC && (
        <div className="vp-cc" id={ccId} ref={ccRef} role="region" aria-label={`Transcript: ${label}`}>
          {cues.map((cue, i) => (
            <button
              type="button"
              key={i}
              className={`vp-cc-line${i === activeIdx ? ' is-active' : ''}${i < activeIdx ? ' is-past' : ''}`}
              aria-current={i === activeIdx ? 'true' : undefined}
              onClick={() => seekTo(cue.t)}
            >{cue.text}</button>
          ))}
        </div>
      )}
    </div>
  );
}

window.VoicePlayer = VoicePlayer;
