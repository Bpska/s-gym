"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Users, Award, Calendar, Search, MapPin, Clock } from 'lucide-react';
import { trainers } from '@/lib/data';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import Image from 'next/image';

const specializations = ['All', 'Weight Training', 'HIIT', 'Yoga', 'Pilates', 'Powerlifting', 'Sports Performance', 'Nutrition'];

export default function TrainersPage() {
  const [selectedSpecialization, setSelectedSpecialization] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTrainers = trainers.filter(trainer => {
    const matchesSpecialization = selectedSpecialization === 'All' || 
                                 trainer.specializations.includes(selectedSpecialization);
    const matchesSearch = trainer.user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         trainer.specializations.some(spec => 
                           spec.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesSpecialization && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Expert Personal Trainers
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Work with certified professionals who are passionate about helping you reach your fitness goals
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search trainers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>

            {/* Specialization Filter */}
            <div className="flex flex-wrap gap-2">
              {specializations.map((spec) => (
                <Button
                  key={spec}
                  variant={selectedSpecialization === spec ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedSpecialization(spec)}
                  className={selectedSpecialization === spec ? "bg-orange-500 hover:bg-orange-600" : ""}
                >
                  {spec}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trainers Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredTrainers.map((trainer) => (
              <motion.div key={trainer.id} variants={fadeInUp}>
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full group">
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
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span className="text-sm font-medium">{trainer.rating}</span>
                          </div>
                          <div className="flex items-center space-x-1 text-gray-600">
                            <Users className="h-4 w-4" />
                            <span className="text-sm">{trainer.totalClients}</span>
                          </div>
                          <div className="flex items-center space-x-1 text-gray-600">
                            <Award className="h-4 w-4" />
                            <span className="text-sm">{trainer.experience}y</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {trainer.user.name}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 text-sm">
                        {trainer.bio}
                      </p>
                      
                      <div className="mb-4">
                        <h4 className="font-medium text-gray-900 mb-2">Specializations:</h4>
                        <div className="flex flex-wrap gap-1">
                          {trainer.specializations.map((spec) => (
                            <Badge key={spec} variant="secondary" className="text-xs">
                              {spec}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-medium text-gray-900 mb-2">Certifications:</h4>
                        <div className="flex flex-wrap gap-1">
                          {trainer.certifications.map((cert) => (
                            <Badge key={cert} variant="outline" className="text-xs">
                              {cert}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-medium text-gray-900 mb-2">Available Times:</h4>
                        <div className="space-y-1">
                          {trainer.availableSlots.slice(0, 2).map((slot, index) => (
                            <div key={index} className="flex items-center text-sm text-gray-600">
                              <Clock className="h-3 w-3 mr-1" />
                              {slot.day}: {slot.startTime} - {slot.endTime}
                            </div>
                          ))}
                          {trainer.availableSlots.length > 2 && (
                            <div className="text-xs text-gray-500">
                              +{trainer.availableSlots.length - 2} more slots
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2 mt-auto">
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

          {filteredTrainers.length === 0 && (
            <motion.div {...fadeInUp} className="text-center py-16">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                No trainers found
              </h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your filters or search terms
              </p>
              <Button 
                onClick={() => {
                  setSelectedSpecialization('All');
                  setSearchTerm('');
                }}
                variant="outline"
                className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
              >
                Clear Filters
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}