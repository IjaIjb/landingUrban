import { create } from 'zustand';

interface ReferralStore {
  apply: boolean;
  referrals: boolean;
  referralModal: boolean;
  user:User|null;
  terms: boolean;
  setApply: (referralModal: boolean) => void;
  setReferralModal: (referralModal: boolean) => void;
  checkReferrals: (referralModal: boolean) => void;
  setTerms: (term: boolean) => void;
  setClearAll: () => void;
  setUser: (data:User|null) => void;
}

const useReferralStore = create<ReferralStore>((set) => ({
  terms: false,
  user:null,
  referralModal: true,
  referrals: false,
  apply: false,
  setUser: (user: any) => set((state) => ({ user })),
  setReferralModal: (referralModal: boolean) => set((state) => ({ referralModal })),
  setApply: (apply: boolean) => set((state) => ({ apply })),
  setTerms: (terms: boolean) => set((state) => ({ terms })),
  checkReferrals: (referrals: boolean) => set((state) => ({ referrals })),
  setClearAll: () => set((state) => ({ terms:false,apply:false,referralModal:false ,referrals:false})),

  
}));



export type User = {
  id: string;
  username: string;
  referral: string | null;
  password: string;
  isEmailVerified: boolean;
  email: string;
  role: "USER" | "ADMIN" | "MODERATOR"; // Adjust based on actual roles
  userType: "PASSENGERS" | "DRIVER" | "AGENCY"; // Adjust based on actual user types
  userCategory: "PASSENGERS" | "DRIVER" | "AGENCY"; // Adjust based on actual categories
  status: "ACTIVE" | "INACTIVE" | "SUSPENDED"; // Adjust based on possible statuses
  createdAt: string; // ISO Date String
  updatedAt: string; // ISO Date String
  individual: Individual | null;
  corporateBody: CorporateBody | null;
  providerAgency: ProviderAgency[];
  parks: Park[];
  driver: Driver | null;
};

type Individual = {
  id: string;
  title: string | null;
  firstname: string;
  lastname: string;
  phone: string;
  city: string;
  avatar: string | null;
  userId: string;
  createdAt: string; // ISO Date String
  updatedAt: string; // ISO Date String
};

type CorporateBody = any; // Define this if needed
type ProviderAgency = any; // Define this if needed
type Park = any; // Define this if needed
type Driver = any; // Define this if needed

export default useReferralStore;
