// Head icon — music note for hoods (theme songs), microphone for resident voices.

function VpIcon({ kind }: { kind: string }) {
  if (kind === 'voice') {
    return (
      <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true">
        <rect x="9" y="2.5" width="6" height="11" rx="3" fill="currentColor" />
        <path
          d="M5.5 11 A6.5 6.5 0 0 0 18.5 11"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="12"
          y1="17.5"
          x2="12"
          y2="21"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="8.5"
          y1="21"
          x2="15.5"
          y2="21"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  } else {
    return (
      <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true">
        <path
          d="M9 16.5 V4.5 L20 2.2 V14"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <circle cx="6.4" cy="16.6" r="2.8" fill="currentColor" />
        <circle cx="17.4" cy="14.1" r="2.8" fill="currentColor" />
      </svg>
    );
  }
}
export default VpIcon;
