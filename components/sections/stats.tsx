"use client";

import { motion } from 'framer-motion';
import { Users, Award, Calendar, Zap } from 'lucide-react';
import { StatsCounter } from '@/components/ui/stats-counter';
import { staggerContainer } from '@/lib/animations';

const stats = [
  { end: 5000, label: 'Active Members', icon: <Users className="h-8 w-8" /> },
  { end: 50, label: 'Expert Trainers', icon: <Award className="h-8 w-8" /> },
  { end: 100, label: 'Group Classes', icon: <Calendar className="h-8 w-8" /> },
  { end: 15, label: 'Years Experience', icon: <Zap className="h-8 w-8" /> },
];

export function Stats() {
  return (
    <section className="py-20 bg-gradient-to-r from-orange-500 to-red-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <StatsCounter
              key={index}
              end={stat.end}
              label={stat.label}
              icon={stat.icon}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}