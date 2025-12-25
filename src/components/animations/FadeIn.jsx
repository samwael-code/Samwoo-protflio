import React, { useEffect, useRef, useState } from 'react'

const FadeIn = (children, delay=0, duration=500,threshold=0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(()=> {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // trigger animation when element enters viewport
        if (entry.isIntersecting && !isVisible){
          setIsVisible(true);
        }
      },
      {
        threshold: threshold,
        rootMargin: '0px 0px -50px 0px', //trigger slighty before element is fully visible
      }
    );
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
  };
}, [threshold , isVisible]
);
      
  return (
    <div 
      ref={elementRef}
      className={isVisible  ? 'animate-fade' : 'opacity-0'} 
      style={{
        animationDuration: `${duration}ms`,
        animationDelay: `${delay}ms`,
        animationFillMode: 'both',
      }}
    >

    </div>
  );
}

export default FadeIn