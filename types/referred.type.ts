type LocationCountry = {
  id: string;
  name: string;
  coordinate: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
  user: string;
  states: string[];
};

type LocationState = {
  id: string;
  name: string;
  coordinate: string;
  locationCountryId: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
  locationCountry: LocationCountry;
  user: string;
  cities: string[];
};

type LocationCity = {
  id: string;
  name: string;
  uniqueID: string;
  coordinate: string;
  locationStateId: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
  user: string;
  locationState: LocationState;
};

type Park = {
  id: string;
  description: Record<string, unknown>;
  address: Record<string, unknown>;
  phone: Record<string, unknown>;
  coordinate: Record<string, unknown>;
  city: Record<string, unknown>;
  locationCityId: string;
  region: Record<string, unknown>;
  image: Record<string, unknown>;
  parkOwnerId: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
  parkOwner: string;
  user: string;
  locationCity: LocationCity;
  otherUsers: string;
};

type Individual = {
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
  user: string;
};

type CorporateBody = {
  id: string;
  companyName: string;
  companyAddress: string;
  companyRC: string;
  phone: string;
  avatar: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
  documents: CustomDocument;
};

type CustomDocument = {
  id: string;
  documentType: string;
  description: Record<string, unknown>;
  file: Record<string, unknown>;
  corporateBodyId: string;
  expireAt: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
  corporateBody: string;
};

export type IUserReferred = {
  id: string;
  username: string;
  referral: string;
  isEmailVerified: boolean;
  email: string;
  role:string
  userType: string
  userCategory: string
  status: string
  individual: Individual;
  corporateBody?: CorporateBody | string;
  parks: Park;
  providerAgency: string[];
};
