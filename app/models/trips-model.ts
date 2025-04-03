export type ITrips = ITrip[];

export interface ITrip {
  id: string;
  description: string;
  driverId: string;
  departureId: string;
  destinationId: string;
  vehicleId: string;
  uniqueID: string;
  cost: string;
  departureDate: string;
  departureTime: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
  tripDriver: ITripDriver;
  tripVehicle: ITripVehicle;
  departure: Departure;
  destination: Destination;
  tripUser: TripUser;
  bookings: Booking[];
  finalBusStop: IFinalBusStop;
}

export interface ITripDriver {
  id: string;
  userId: string;
  license: string;
  fullName: any;
  age: number;
  nationalIdentityNumber: string;
  sex: string;
  maritalStatus: string;
  stateOfOrigin: string;
  localGovernment: string;
  houseAddress: string;
  avatar: string;
  otherDocument: string;
  otherDetail: string;
  latitude: string;
  longitude: string;
  status: string;
  approvalStatus: string;
  providerAgencyId: string;
  createdAt: string;
  updatedAt: string;
}

export interface ITripVehicle {
  id: string;
  color: string;
  otherDetail: string;
  uniqueID: string;
  plateNumber: string;
  status: string;
  approvalStatus: string;
  totalRevenue: string;
  enrollmentCity: string;
  engineNumber: string;
  engineType: string;
  registrationDate: string;
  vehicleTypeId: string;
  driverId: any;
  providerAgencyId: any;
  fleetPartnersId: any;
  userId: string;
  createdAt: string;
  updatedAt: string;
  vehicleType: IVehicleType;
}

export interface IVehicleType {
  id: string;
  category: string;
  name: string;
  otherDetail: string;
  numberOfSeats: number;
  numberOfRows: number;
  numberOfColumns: number;
  seatFormation: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
}

export interface Departure {
  id: string;
  description: string;
  address: any;
  phone: string;
  coordinate: string;
  city: string;
  locationCityId: string;
  region: string;
  image: string;
  parkOwnerId: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
  locationCity: LocationCity;
}

export interface LocationCity {
  id: string;
  name: string;
  uniqueID: string;
  coordinate: string;
  locationStateId: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
  locationState: LocationState2;
}

export interface Destination {
  id: string;
  description: string;
  phone: string;
  coordinate: string;
  city: string;
  locationCityId: string;
  region: string;
  image: string;
  parkOwnerId: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
  locationCity: LocationCity2;
}

export interface LocationCity2 {
  id: string;
  name: string;
  uniqueID: string;
  coordinate: string;
  locationStateId: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
  locationState: LocationState2;
}

export interface TripUser {
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
}

export interface Booking {
  id: string;
  extraDetail: any;
  seatNumber: string;
  nextOfKinName: string;
  nextOfKinPhone: string;
  costOfExtraLuggage: string;
  extraLuggageWeight: string;
  uniqueID: string;
  userId: string;
  tripId: string;
  createdAt: string;
  updatedAt: string;
}

export interface IFinalBusStop {
  id: string;
  name: string;
  uniqueID: string;
  coordinate: string;
  locationCityId: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
  locationCity: LocationCity2;
}

export interface LocationCity2 {
  id: string;
  name: string;
  uniqueID: string;
  coordinate: string;
  locationStateId: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
  locationState: LocationState2;
}

export interface LocationState2 {
  id: string;
  name: string;
  coordinate: string;
  locationCountryId: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
}
