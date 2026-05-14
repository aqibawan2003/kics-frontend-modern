// ZJU-style wave dividers between sections

export default function WaveDivider({ color = 'white', flip = false }) {
  const colors = {
    white: '#ffffff',
    blue: '#0066cc',
    'light-blue': '#5B9BD5',
  };

  const fillColor = colors[color] || colors.white;

  return (
    <div className={`w-full overflow-hidden leading-none ${flip ? 'rotate-180' : ''}`}>
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="w-full h-16 md:h-20"
        style={{ display: 'block' }}
      >
        <path
          d="M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,120 L0,120 Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
}
