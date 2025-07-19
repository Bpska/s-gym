"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, Star, Filter, Search, Calendar } from 'lucide-react';
import { gymClasses } from '@/lib/data';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import Image from 'next/image';

const categories = ['All', 'Cardio', 'Strength', 'Yoga', 'HIIT', 'Dance'];
const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];

export default function ClassesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredClasses = gymClasses.filter(gymClass => {
    const matchesCategory = selectedCategory === 'All' || gymClass.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'All' || gymClass.difficulty === selectedDifficulty.toLowerCase();
    const matchesSearch = gymClass.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         gymClass.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesDifficulty && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-orange-500 to-red-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Fitness Classes
            </h1>
            <p className="text-xl text-orange-100 max-w-2xl mx-auto">
              Choose from over 100 group fitness classes led by certified instructors
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
                placeholder="Search classes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-orange-500 hover:bg-orange-600" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Difficulty Filter */}
            <div className="flex gap-2">
              {difficulties.map((difficulty) => (
                <Button
                  key={difficulty}
                  variant={selectedDifficulty === difficulty ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedDifficulty(difficulty)}
                  className={selectedDifficulty === difficulty ? "bg-orange-500 hover:bg-orange-600" : ""}
                >
                  {difficulty}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Classes Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredClasses.map((gymClass) => (
              <motion.div key={gymClass.id} variants={fadeInUp}>
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                  <div className="relative h-48">
                    <Image
                      src={gymClass.image}
                      alt={gymClass.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className={`${
                        gymClass.difficulty === 'beginner' ? 'bg-green-500' :
                        gymClass.difficulty === 'intermediate' ? 'bg-yellow-500' :
                        'bg-red-500'
                      }`}>
                        {gymClass.difficulty}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4 bg-orange-500 text-white px-2 py-1 rounded text-sm font-medium">
                      ${gymClass.price}
                    </div>
                  </div>
                  
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {gymClass.name}
                      </h3>
                      <p className="text-gray-600 mb-4">
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

                      <div className="mb-4">
                        <h4 className="font-medium text-gray-900 mb-2">Schedule:</h4>
                        <div className="space-y-1">
                          {gymClass.schedule.map((schedule) => (
                            <div key={schedule.id} className="text-sm text-gray-600">
                              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][schedule.dayOfWeek]} • {schedule.startTime} - {schedule.endTime}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 mt-auto">
                      <Calendar className="h-4 w-4 mr-2" />
                      Book Class
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {filteredClasses.length === 0 && (
            <motion.div {...fadeInUp} className="text-center py-16">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                No classes found
              </h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your filters or search terms
              </p>
              <Button 
                onClick={() => {
                  setSelectedCategory('All');
                  setSelectedDifficulty('All');
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