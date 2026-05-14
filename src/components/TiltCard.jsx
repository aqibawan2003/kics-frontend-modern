import { useRef, useState } from 'react';

export default function TiltCard({ children, className = '', intensity = 10 }) {
  const cardRef = useRef(null);
  const [style, setStyle] = useState({});

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * intensity;
    const rotateY = ((centerX - x) / centerX) * intensity;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
      transition: 'transform 0.1s ease-out',
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.3s ease-out',
    });
  };

  return (
    <div
      ref={cardRef}
      className={`relative ${className}`}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {/* Shine effect overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-300"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(255,255,255,0.1) 100%)',
        }}
      />
    </div>
  );
}
