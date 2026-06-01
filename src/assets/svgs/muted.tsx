const Mute = () => {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
      <path d="M4 9 H7 L11.5 5 V19 L7 15 H4 Z" fill="currentColor" />
      <line
        x1="15"
        y1="9"
        x2="21"
        y2="15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="21"
        y1="9"
        x2="15"
        y2="15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Mute;
