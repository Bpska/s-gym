"use client";

import { motion } from 'framer-motion';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Star, Shield, Clock, Users, Zap } from 'lucide-react';
import { memberships } from '@/lib/data';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const benefits = [
  {
    icon: <Shield className="h-8 w-8 text-orange-500" />,
    title: "No Contracts",
    description: "Cancel anytime with 30-day notice. No hidden fees or long-term commitments."
  },
  {
    icon: <Clock className="h-8 w-8 text-orange-500" />,
    title: "24/7 Access",
    description: "Premium and Elite members get round-the-clock access to all facilities."
  },
  {
    icon: <Users className="h-8 w-8 text-orange-500" />,
    title: "Guest Privileges",
    description: "Bring friends and family to workout with you. Guest passes included."
  },
  {
    icon: <Zap className="h-8 w-8 text-orange-500" />,
    title: "Mobile App",
    description: "Book classes, track workouts, and manage your membership on the go."
  }
];

const faqs = [
  {
    question: "Can I freeze my membership?",
    answer: "Yes, you can freeze your membership for up to 3 months per year for medical reasons or travel."
  },
  {
    question: "What's included in the basic membership?",
    answer: "Basic membership includes access to all gym equipment, locker rooms, basic fitness assessment, and mobile app access."
  },
  {
    question: "Do you offer corporate discounts?",
    answer: "Yes, we offer 15% corporate discounts for companies with 10+ employees. Contact us for more details."
  },
  {
    question: "Can I upgrade my membership anytime?",
    answer: "Absolutely! You can upgrade your membership at any time and the price difference will be prorated."
  }
];

export default function MembershipPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-orange-500 to-red-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Membership Plans
            </h1>
            <p className="text-xl text-orange-100 max-w-2xl mx-auto">
              Choose the perfect plan for your fitness journey. All memberships include access to our premium facilities and expert guidance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {memberships.map((membership) => (
              <motion.div key={membership.id} variants={fadeInUp}>
                <Card className={`relative overflow-hidden border-2 transition-all duration-300 h-full ${
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
                    <p className="text-sm text-gray-500 mt-2">
                      Billed monthly • Cancel anytime
                    </p>
                  </CardHeader>
                  
                  <CardContent className="pb-8 flex flex-col h-full">
                    <ul className="space-y-3 mb-8 flex-1">
                      {membership.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="space-y-3">
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
                      
                      <Button variant="outline" className="w-full">
                        Free 7-Day Trial
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Membership Benefits
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every membership comes with amazing perks and benefits designed to support your fitness journey.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {benefits.map((benefit, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="text-center border-0 shadow-lg h-full">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions about our membership plans? We've got answers.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            {faqs.map((faq, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="mb-4 border-0 shadow-md">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Fitness Journey?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Join thousands of members who've transformed their lives at FitnessHub. Start with a free 7-day trial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600">
                Schedule Tour
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}