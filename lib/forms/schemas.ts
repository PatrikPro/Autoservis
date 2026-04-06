import { z } from "zod";

export const RESERVATION_TIME_SLOTS = [
  "07:00", "07:30", "08:00", "08:30", "09:00", "09:30",
  "10:00", "10:30", "11:00", "11:30", "12:00", "12:30",
  "13:00", "13:30", "14:00", "14:30", "15:00", "15:30",
  "16:00", "16:30",
] as const;

export const contactSchema = z.object({
  name: z.string().min(2, "Jméno musí mít alespoň 2 znaky"),
  email: z.string().email("Zadejte platný e-mail"),
  phone: z.string().optional(),
  message: z.string().min(10, "Zpráva musí mít alespoň 10 znaků"),
  website: z.string().max(0).optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export const reservationStep1Schema = z.object({
  serviceId: z.string().min(1, "Vyberte službu"),
});

export const reservationStep2Schema = z.object({
  vehicleCategory: z.string().min(1, "Vyberte typ vozidla"),
  vehicleMake: z.string().min(1, "Zadejte značku vozidla"),
  vehicleModel: z.string().min(1, "Zadejte model vozidla"),
  vehicleYear: z
    .number()
    .min(1990, "Rok výroby musí být od 1990")
    .max(new Date().getFullYear() + 1, "Neplatný rok výroby"),
  licensePlate: z.string().min(5, "Zadejte platnou SPZ").max(10),
});

export const reservationStep3Schema = z.object({
  date: z.string().min(1, "Vyberte datum"),
  time: z.string().min(1, "Vyberte čas"),
});

export const reservationStep4Schema = z.object({
  name: z.string().min(2, "Jméno musí mít alespoň 2 znaky"),
  email: z.string().email("Zadejte platný e-mail"),
  phone: z.string().min(9, "Zadejte platné telefonní číslo"),
  note: z.string().optional(),
  website: z.string().max(0).optional(),
});

export const reservationSchema = reservationStep1Schema
  .merge(reservationStep2Schema)
  .merge(reservationStep3Schema)
  .merge(reservationStep4Schema);

export type ReservationFormData = z.infer<typeof reservationSchema>;

export const newsletterSchema = z.object({
  email: z.string().email("Zadejte platný e-mail"),
  website: z.string().max(0).optional(),
});

export type NewsletterFormData = z.infer<typeof newsletterSchema>;
