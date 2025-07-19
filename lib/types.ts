export interface User {
  id: string;
  email: string;
  name: string;
  image?: string;
  role: 'member' | 'trainer' | 'admin';
  membershipType?: 'basic' | 'premium' | 'elite';
  joinDate: Date;
  profile?: UserProfile;
}

export interface UserProfile {
  bio?: string;
  age?: number;
  height?: number;
  weight?: number;
  fitnessGoals: string[];
  emergencyContact?: string;
  medicalConditions?: string;
}

export interface Trainer {
  id: string;
  userId: string;
  user: User;
  specializations: string[];
  certifications: string[];
  experience: number;
  hourlyRate: number;
  bio: string;
  rating: number;
  totalClients: number;
  availableSlots: TimeSlot[];
}

export interface GymClass {
  id: string;
  name: string;
  description: string;
  instructor: Trainer;
  instructorId: string;
  duration: number;
  capacity: number;
  currentBookings: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  category: string;
  schedule: ClassSchedule[];
  price: number;
  image: string;
}

export interface ClassSchedule {
  id: string;
  classId: string;
  dayOfWeek: number;
  startTime: string;
  endTime: string;
  date?: Date;
}

export interface Booking {
  id: string;
  userId: string;
  classId: string;
  scheduleId: string;
  bookingDate: Date;
  status: 'confirmed' | 'cancelled' | 'completed';
  paymentStatus: 'pending' | 'paid' | 'refunded';
}

export interface TimeSlot {
  day: string;
  startTime: string;
  endTime: string;
  available: boolean;
}

export interface Membership {
  id: string;
  name: string;
  price: number;
  duration: number;
  features: string[];
  isPopular?: boolean;
}