import { useEffect, useRef } from 'react';

export default function ParallaxSection({ children, speed = 0.5, className = '' }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const scrolled = window.scrollY;
      const isInView = rect.top < window.innerHeight && rect.bottom > 0;

      if (isInView) {
        const yPos = -(scrolled * speed);
        sectionRef.current.style.transform = `translateY(${yPos}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div className={`parallax ${className}`} ref={sectionRef}>
      {children}
    </div>
  );
}
