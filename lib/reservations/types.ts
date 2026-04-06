export interface Reservation {
  id: string;
  serviceId: string;
  vehicleCategory: string;
  vehicleMake: string;
  vehicleModel: string;
  vehicleYear: number;
  licensePlate: string;
  date: string;
  time: string;
  name: string;
  email: string;
  phone: string;
  note?: string;
  createdAt: string;
}

export interface ReservationRepo {
  create(data: Omit<Reservation, "id" | "createdAt">): Promise<Reservation>;
  getAll(): Promise<Reservation[]>;
}
