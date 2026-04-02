import { useScrollReveal } from '../../hooks/useScrollReveal';

type RevealDirection = 'up' | 'down' | 'left' | 'right' | 'fade';

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: RevealDirection;
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
  threshold?: number;
}

const getTransform = (direction: RevealDirection, distance: number): string => {
  switch (direction) {
    case 'up':    return `translateY(${distance}px)`;
    case 'down':  return `translateY(-${distance}px)`;
    case 'left':  return `translateX(${distance}px)`;
    case 'right': return `translateX(-${distance}px)`;
    case 'fade':  return 'none';
    default:      return `translateY(${distance}px)`;
  }
};

export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 650,
  distance = 36,
  className = '',
  threshold = 0.15,
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold });

  const hiddenTransform = getTransform(direction, distance);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate(0, 0)' : hiddenTransform,
        transition: `opacity ${duration}ms cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
}
