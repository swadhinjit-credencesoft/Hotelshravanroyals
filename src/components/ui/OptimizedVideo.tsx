'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';

interface OptimizedVideoProps {
  src: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function OptimizedVideo({ src, className, style }: OptimizedVideoProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "400px" });

  return (
    <div ref={ref} className={`w-full h-full absolute inset-0 ${className || ''}`} style={style}>
      {isInView && (
        <video
          src={src}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      )}
    </div>
  );
}
