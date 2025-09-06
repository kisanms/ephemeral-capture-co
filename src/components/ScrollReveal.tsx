import React from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Skeleton } from '@/components/ui/skeleton';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  showSkeleton?: boolean;
  skeletonHeight?: string;
  delay?: number;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  className = '', 
  showSkeleton = false,
  skeletonHeight = 'h-32',
  delay = 0
}) => {
  const { ref, hasBeenSeen } = useIntersectionObserver();

  return (
    <div 
      ref={ref} 
      className={`transition-all duration-700 ${className}`}
      style={{ 
        transitionDelay: `${delay}ms`,
        opacity: hasBeenSeen ? 1 : 0,
        transform: hasBeenSeen ? 'translateY(0)' : 'translateY(30px)'
      }}
    >
      {hasBeenSeen ? children : (
        showSkeleton ? (
          <Skeleton className={`w-full ${skeletonHeight} rounded-lg`} />
        ) : (
          <div className="opacity-0">{children}</div>
        )
      )}
    </div>
  );
};

export default ScrollReveal;