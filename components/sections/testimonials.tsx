"use client";

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: 'Jessica Chen',
    role: 'Software Engineer',
    image: 'https://images.pexels.com/photos/3754285/pexels-photo-3754285.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    content: 'FitnessHub completely transformed my lifestyle. The trainers are incredibly knowledgeable and supportive. I\'ve lost 30 pounds and gained so much confidence!',
    achievement: 'Lost 30 lbs in 6 months'
  },
  {
    id: 2,
    name: 'Marcus Thompson',
    role: 'Marketing Manager',
    image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    content: 'The variety of classes and state-of-the-art equipment keeps me motivated. Best investment I\'ve made for my health. The community here is amazing!',
    achievement: 'Gained 15 lbs muscle'
  },
  {
    id: 3,
    name: 'Sarah Williams',
    role: 'Teacher',
    image: 'https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    content: 'After trying many gyms, FitnessHub stands out with its personalized approach. The nutrition coaching helped me develop healthy habits that stick.',
    achievement: 'Improved overall health'
  }
];

export function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          {...fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real transformations from real members. See how FitnessHub has helped thousands achieve their goals.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div key={testimonial.id} variants={fadeInUp}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Quote className="h-8 w-8 text-orange-500 mr-3" />
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {testimonial.role}
                      </p>
                      <p className="text-sm text-orange-600 font-medium">
                        {testimonial.achievement}
                      </p>
                    </div>
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
          <div className="bg-orange-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-gray-600 mb-6">
              Join thousands of members who've transformed their lives at FitnessHub
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Start Free Trial
              </button>
              <button className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Schedule Tour
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}