"use client";

import { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface StatsCounterProps {
  end: number;
  duration?: number;
  label: string;
  icon: React.ReactNode;
}

export function StatsCounter({ end, duration = 2, label, icon }: StatsCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        requestAnimationFrame(animateCount);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animateCount);
  }, [isInView, end, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20"
    >
      <div className="text-orange-400 mb-2 flex justify-center">
        {icon}
      </div>
      <div className="text-3xl font-bold text-white mb-1">
        {count.toLocaleString()}+
      </div>
      <div className="text-gray-300 text-sm font-medium">
        {label}
      </div>
    </motion.div>
  );
}