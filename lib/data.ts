import { GymClass, Trainer, Membership, User } from './types';

export const memberships: Membership[] = [
  {
    id: '1',
    name: 'Basic',
    price: 29,
    duration: 1,
    features: [
      'Access to gym equipment',
      'Locker room access',
      'Basic fitness assessment',
      'Mobile app access'
    ]
  },
  {
    id: '2',
    name: 'Premium',
    price: 59,
    duration: 1,
    features: [
      'Everything in Basic',
      'Group fitness classes',
      'Pool and sauna access',
      'Nutrition consultation',
      'Guest passes (2/month)'
    ],
    isPopular: true
  },
  {
    id: '3',
    name: 'Elite',
    price: 99,
    duration: 1,
    features: [
      'Everything in Premium',
      'Personal training sessions',
      'Massage therapy',
      'Unlimited guest passes',
      'Priority booking',
      'Nutrition meal plans'
    ]
  }
];

export const trainers: Trainer[] = [
  {
    id: '1',
    userId: '1',
    user: {
      id: '1',
      name: 'Sarah Johnson',
      email: 'sarah@fitnesshub.com',
      image: 'https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=400',
      role: 'trainer',
      joinDate: new Date('2020-01-15')
    },
    specializations: ['Weight Training', 'HIIT', 'Nutrition'],
    certifications: ['NASM-CPT', 'Precision Nutrition Level 1'],
    experience: 5,
    hourlyRate: 75,
    bio: 'Passionate about helping clients achieve their fitness goals through personalized training and nutrition guidance.',
    rating: 4.9,
    totalClients: 150,
    availableSlots: [
      { day: 'Monday', startTime: '06:00', endTime: '10:00', available: true },
      { day: 'Wednesday', startTime: '14:00', endTime: '18:00', available: true },
      { day: 'Friday', startTime: '06:00', endTime: '10:00', available: true }
    ]
  },
  {
    id: '2',
    userId: '2',
    user: {
      id: '2',
      name: 'Mike Chen',
      email: 'mike@fitnesshub.com',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400',
      role: 'trainer',
      joinDate: new Date('2019-03-10')
    },
    specializations: ['Powerlifting', 'Strength Training', 'Sports Performance'],
    certifications: ['CSCS', 'USAW Level 1'],
    experience: 8,
    hourlyRate: 85,
    bio: 'Former competitive powerlifter specializing in strength development and athletic performance enhancement.',
    rating: 4.8,
    totalClients: 120,
    availableSlots: [
      { day: 'Tuesday', startTime: '05:00', endTime: '09:00', available: true },
      { day: 'Thursday', startTime: '16:00', endTime: '20:00', available: true },
      { day: 'Saturday', startTime: '08:00', endTime: '12:00', available: true }
    ]
  },
  {
    id: '3',
    userId: '3',
    user: {
      id: '3',
      name: 'Emma Rodriguez',
      email: 'emma@fitnesshub.com',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      role: 'trainer',
      joinDate: new Date('2021-06-20')
    },
    specializations: ['Yoga', 'Pilates', 'Flexibility Training'],
    certifications: ['RYT-500', 'Pilates Method Alliance'],
    experience: 4,
    hourlyRate: 65,
    bio: 'Dedicated to promoting mind-body wellness through yoga, pilates, and mindful movement practices.',
    rating: 4.9,
    totalClients: 200,
    availableSlots: [
      { day: 'Monday', startTime: '17:00', endTime: '21:00', available: true },
      { day: 'Wednesday', startTime: '09:00', endTime: '13:00', available: true },
      { day: 'Sunday', startTime: '10:00', endTime: '14:00', available: true }
    ]
  }
];

export const gymClasses: GymClass[] = [
  {
    id: '1',
    name: 'High-Intensity Interval Training',
    description: 'Burn calories and build endurance with this challenging full-body workout.',
    instructor: trainers[0],
    instructorId: '1',
    duration: 45,
    capacity: 20,
    currentBookings: 15,
    difficulty: 'intermediate',
    category: 'Cardio',
    schedule: [
      { id: '1', classId: '1', dayOfWeek: 1, startTime: '06:00', endTime: '06:45' },
      { id: '2', classId: '1', dayOfWeek: 3, startTime: '18:00', endTime: '18:45' },
      { id: '3', classId: '1', dayOfWeek: 5, startTime: '06:00', endTime: '06:45' }
    ],
    price: 25,
    image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '2',
    name: 'Power Yoga Flow',
    description: 'Dynamic yoga practice combining strength, flexibility, and mindfulness.',
    instructor: trainers[2],
    instructorId: '3',
    duration: 60,
    capacity: 25,
    currentBookings: 18,
    difficulty: 'beginner',
    category: 'Yoga',
    schedule: [
      { id: '4', classId: '2', dayOfWeek: 2, startTime: '07:00', endTime: '08:00' },
      { id: '5', classId: '2', dayOfWeek: 4, startTime: '19:00', endTime: '20:00' },
      { id: '6', classId: '2', dayOfWeek: 6, startTime: '09:00', endTime: '10:00' }
    ],
    price: 20,
    image: 'https://images.pexels.com/photos/3822167/pexels-photo-3822167.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '3',
    name: 'Strength & Conditioning',
    description: 'Build muscle and improve athletic performance with compound movements.',
    instructor: trainers[1],
    instructorId: '2',
    duration: 50,
    capacity: 15,
    currentBookings: 12,
    difficulty: 'advanced',
    category: 'Strength',
    schedule: [
      { id: '7', classId: '3', dayOfWeek: 1, startTime: '17:00', endTime: '17:50' },
      { id: '8', classId: '3', dayOfWeek: 4, startTime: '17:00', endTime: '17:50' },
      { id: '9', classId: '3', dayOfWeek: 6, startTime: '10:00', endTime: '10:50' }
    ],
    price: 30,
    image: 'https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];