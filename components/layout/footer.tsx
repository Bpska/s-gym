import Link from 'next/link';
import { Dumbbell, MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Dumbbell className="h-8 w-8 text-orange-500" />
              <span className="text-xl font-bold">FitnessHub</span>
            </div>
            <p className="text-gray-400 text-sm">
              Transform your body, transform your life. Join thousands of members who've achieved their fitness goals with us.
            </p>
            <div className="flex space-x-3">
              <Button size="sm" variant="ghost" className="p-2 text-gray-400 hover:text-orange-500">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="p-2 text-gray-400 hover:text-orange-500">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="p-2 text-gray-400 hover:text-orange-500">
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/classes" className="text-gray-400 hover:text-orange-500 transition-colors">Classes</Link></li>
              <li><Link href="/trainers" className="text-gray-400 hover:text-orange-500 transition-colors">Personal Trainers</Link></li>
              <li><Link href="/membership" className="text-gray-400 hover:text-orange-500 transition-colors">Membership Plans</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-orange-500 transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><span className="text-gray-400">Strength Training</span></li>
              <li><span className="text-gray-400">Cardio Workouts</span></li>
              <li><span className="text-gray-400">Group Classes</span></li>
              <li><span className="text-gray-400">Nutrition Coaching</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2 text-gray-400">
                <MapPin className="h-4 w-4" />
                <span>123 Fitness Street, City, State 12345</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Phone className="h-4 w-4" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail className="h-4 w-4" />
                <span>info@fitnesshub.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 FitnessHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}