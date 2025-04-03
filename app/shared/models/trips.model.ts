export type ITrips = ITrip[];

export interface ITrip {
  id: string;
  parkId: string;
  driverId: any;
  parkManagerId: any;
  endState: string;
  endCity: string;
  totalSeats?: number;
  bookedSeats: number;
  status: string;
  tripCode: string;
  fare: string;
  vehicleType: string;
  pricePerKg: any;
  lugage: string;
  isPublic: boolean;
  date: string;
  time: string;
  createdAt: string;
  updatedAt: string;
  park: Park;
  driver: any;
}

export interface Park {
  id: string;
  name: string;
  parkOwnerId: string;
  parkManagerId?: string;
  state: string;
  city: string;
  latitude?: string;
  longitude?: string;
  fullAddress: string;
  approved: boolean;
  createdAt: string;
  updatedAt: string;
  parkManager?: ParkManager;
  parkOwner: ParkOwner;
}

export interface ParkManager {
  id: string;
  firstName: string;
  lastName: string;
  urbanId: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
}

export interface ParkOwner {
  id: string;
  accountType: string;
  country: string;
  isAccountVerified: any;
  isEmailVerified_: any;
  lastSeen: any;
  online: any;
  userId: string;
  createdAt: string;
  updatedAt: string;
  user: User;
}

export interface User {
  id: string;
  email: string;
  password: string;
  userType: string;
  status: string;
  deviceToken: string;
  phoneNumber: string;
  fullName: any;
  verifiedAt: any;
  isApproved: boolean;
  providerAgencyId: any;
  createdAt: string;
  updatedAt: string;
}
