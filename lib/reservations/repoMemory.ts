import type { Reservation, ReservationRepo } from "./types";

const store: Reservation[] = [];

function generateId(): string {
  return `res_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}

export const reservationRepo: ReservationRepo = {
  async create(data) {
    const reservation: Reservation = {
      ...data,
      id: generateId(),
      createdAt: new Date().toISOString(),
    };
    store.push(reservation);
    return reservation;
  },

  async getAll() {
    return [...store];
  },
};
