export interface VehicleInfo {
  id: string;
  nameUrdu: string;
  nameEnglish: string;
  subtitleUrdu: string;
  capacity: string;
  capacityUrdu: string;
  dimensions: string;
  idealForUrdu: string[];
  idealForEnglish: string[];
  image: string;
  badgeUrdu: string;
  tagColor: string;
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
}
