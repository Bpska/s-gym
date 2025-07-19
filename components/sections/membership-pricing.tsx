"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Check, Star } from 'lucide-react';
import { memberships } from '@/lib/data';
import { fadeInUp, staggerContainer, hoverScale } from '@/lib/animations';

export function MembershipPricing() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          {...fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Membership
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Flexible membership options to fit your lifestyle and fitness goals. Cancel anytime.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {memberships.map((membership) => (
            <motion.div key={membership.id} variants={fadeInUp} {...hoverScale}>
              <Card className={`relative overflow-hidden border-2 transition-all duration-300 ${
                membership.isPopular 
                  ? 'border-orange-500 shadow-xl scale-105' 
                  : 'border-gray-200 hover:border-orange-300'
              }`}>
                {membership.isPopular && (
                  <div className="absolute top-0 left-0 right-0 bg-orange-500 text-white text-center py-2 text-sm font-medium">
                    <Star className="inline h-4 w-4 mr-1" />
                    Most Popular
                  </div>
                )}
                
                <CardHeader className={`text-center ${membership.isPopular ? 'pt-12' : 'pt-6'}`}>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {membership.name}
                  </h3>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900">
                      ${membership.price}
                    </span>
                    <span className="text-gray-600">/month</span>
                  </div>
                </CardHeader>
                
                <CardContent className="pb-8">
                  <ul className="space-y-3 mb-8">
                    {membership.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${
                      membership.isPopular
                        ? 'bg-orange-500 hover:bg-orange-600'
                        : 'bg-gray-900 hover:bg-gray-800'
                    }`}
                    size="lg"
                  >
                    Get Started
                  </Button>
                  
                  <p className="text-center text-xs text-gray-500 mt-3">
                    No commitment • Cancel anytime
                  </p>
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
          <p className="text-gray-600 mb-4">
            All memberships include access to our mobile app and basic fitness assessment
          </p>
          <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
            Compare All Plans
          </Button>
        </motion.div>
      </div>
    </section>
  );
}