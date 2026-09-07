export interface VehicleInfo {
  id: string;
  nameUrdu: string;
  nameEnglish: string;
  subtitleUrdu: string;
  subtitleEnglish?: string;
  capacity: string;
  capacityUrdu: string;
  dimensions: string;
  idealForUrdu: string[];
  idealForEnglish: string[];
  image: string;
  webpImage?: string;
  fallbackImage?: string;
  badgeUrdu: string;
  badgeEnglish?: string;
  tagColor: string;
  altUrdu?: string;
  altEnglish?: string;
}

export interface BranchInfo {
  id: string;
  nameUrdu: string;
  nameEnglish: string;
  cityUrdu: string;
  cityEnglish: string;
  addressUrdu: string;
  addressEnglish: string;
  phone1: string;
  phone2: string;
  mapUrl: string;
  isHeadOffice?: boolean;
}

export interface BookingFormData {
  originCity: string;
  destinationCity: string;
  vehicleType: string;
  goodsType: string;
  weight: string;
  loadingDate: string;
  customerName: string;
  customerPhone: string;
  specialInstructions: string;
  isCorporateInquiry?: boolean;
  companyName?: string;
  monthlyTrips?: string;
  industryType?: string;
}

export interface CorporateProfileData {
  companyNameUrdu: string;
  companyNameEnglish: string;
  ntn: string;
  proprietorUrdu: string;
  proprietorEnglish: string;
  proprietorRoleUrdu: string;
  proprietorRoleEnglish: string;
  primaryPhone: string;
  secondaryPhone: string;
  email: string;
  registeredAddressUrdu: string;
  registeredAddressEnglish: string;
  fleetCapacityRange: string;
  serviceModel: string;
  taxCompliance: string;
  paymentMethods: string[];
}
