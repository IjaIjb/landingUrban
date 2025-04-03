export type ITickets = ITicket[];

export interface ITicket {
  id: string;
  extraDetail: any;
  seatNumber: string;
  status: string;
  nextOfKinName: string;
  nextOfKinPhone: string;
  costOfExtraLuggage: string;
  extraLuggageWeight: string;
  uniqueID: string;
  userId: string;
  tripId: string;
  transactionId: string;
  createdAt: string;
  updatedAt: string;
  trip: Trip;
  user: User;
  transaction: Transaction;
}

export interface Trip {
  id: string;
  description: string;
  driverId: string;
  departureId: string;
  destinationId: any;
  finalBusStopId: string;
  vehicleId: string;
  uniqueID: string;
  cost: string;
  departureDate: string;
  departureTime: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
}

export interface User {
  id: string;
  username: string;
  password: string;
  isEmailVerified: boolean;
  email: string;
  role: string;
  userType: string;
  userCategory: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  individual: Individual;
  corporateBody: any;
}

export interface Individual {
  id: string;
  title: string;
  firstname: string;
  lastname: string;
  phone: string;
  city: string;
  avatar: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
}

export interface Transaction {
  id: string;
  description: string;
  amount: number;
  uniqueID: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
}
