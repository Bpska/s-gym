"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Users, Star, Calendar } from 'lucide-react';
import { gymClasses } from '@/lib/data';
import { fadeInUp, staggerContainer, hoverScale } from '@/lib/animations';
import Image from 'next/image';

export function FeaturedClasses() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          {...fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Classes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join our popular fitness classes led by certified trainers. From high-intensity workouts to relaxing yoga sessions.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {gymClasses.map((gymClass) => (
            <motion.div key={gymClass.id} variants={fadeInUp} {...hoverScale}>
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <Image
                    src={gymClass.image}
                    alt={gymClass.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      gymClass.difficulty === 'beginner' ? 'bg-green-100 text-green-800' :
                      gymClass.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {gymClass.difficulty}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 bg-orange-500 text-white px-2 py-1 rounded text-sm font-medium">
                    ${gymClass.price}
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {gymClass.name}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {gymClass.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Clock className="h-4 w-4" />
                      <span>{gymClass.duration} min</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Users className="h-4 w-4" />
                      <span>{gymClass.currentBookings}/{gymClass.capacity}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <Image
                        src={gymClass.instructor.user.image || '/placeholder-avatar.jpg'}
                        alt={gymClass.instructor.user.name}
                        width={32}
                        height={32}
                        className="rounded-full"
                      />
                      <span className="text-sm font-medium text-gray-700">
                        {gymClass.instructor.user.name}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">
                        {gymClass.instructor.rating}
                      </span>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-orange-500 hover:bg-orange-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    Book Class
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          {...fadeInUp}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
            View All Classes
          </Button>
        </motion.div>
      </div>
    </section>
  );
}