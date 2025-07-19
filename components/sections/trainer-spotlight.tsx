"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Users, Award, Calendar } from 'lucide-react';
import { trainers } from '@/lib/data';
import { fadeInUp, staggerContainer, hoverScale } from '@/lib/animations';
import Image from 'next/image';

export function TrainerSpotlight() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          {...fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Expert Trainers
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our certified professionals are here to guide you every step of the way to achieving your fitness goals.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {trainers.map((trainer) => (
            <motion.div key={trainer.id} variants={fadeInUp} {...hoverScale}>
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="relative">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={trainer.user.image || '/placeholder-avatar.jpg'}
                      alt={trainer.user.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    ${trainer.hourlyRate}/hr
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {trainer.user.name}
                  </h3>
                  
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{trainer.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-500">
                      <Users className="h-4 w-4" />
                      <span className="text-sm">{trainer.totalClients} clients</span>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-500">
                      <Award className="h-4 w-4" />
                      <span className="text-sm">{trainer.experience}y exp</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm line-clamp-2">
                    {trainer.bio}
                  </p>
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {trainer.specializations.slice(0, 3).map((spec) => (
                        <Badge key={spec} variant="secondary" className="text-xs">
                          {spec}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Button className="w-full bg-orange-500 hover:bg-orange-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      Book Session
                    </Button>
                    <Button variant="outline" className="w-full text-orange-500 border-orange-500 hover:bg-orange-50">
                      View Profile
                    </Button>
                  </div>
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
            View All Trainers
          </Button>
        </motion.div>
      </div>
    </section>
  );
}