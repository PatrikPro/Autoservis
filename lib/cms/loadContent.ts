import type {
  SiteContent,
  ServicesContent,
  VehiclesContent,
  OpeningHoursContent,
  PromoContent,
  GalleryContent,
  TeamContent,
} from "./types";

import siteData from "@/content/site.json";
import servicesData from "@/content/services.json";
import vehiclesData from "@/content/vehicles.json";
import openingHoursData from "@/content/openingHours.json";
import promoData from "@/content/promo.json";
import galleryData from "@/content/gallery.json";
import teamData from "@/content/team.json";

export async function loadSiteContent(): Promise<SiteContent> {
  return siteData as SiteContent;
}

export async function loadServices(): Promise<ServicesContent> {
  const data = servicesData as ServicesContent;
  return {
    categories: [...data.categories].sort((a, b) => a.order - b.order),
    items: data.items
      .filter((item) => item.available)
      .sort((a, b) => a.order - b.order),
  };
}

export async function loadVehicles(): Promise<VehiclesContent> {
  return vehiclesData as VehiclesContent;
}

export async function loadOpeningHours(): Promise<OpeningHoursContent> {
  return openingHoursData as OpeningHoursContent;
}

export async function loadPromo(): Promise<PromoContent | null> {
  const promo = promoData as PromoContent;
  if (!promo.isActive) return null;

  const now = new Date();
  if (promo.validFrom && new Date(promo.validFrom) > now) return null;
  if (promo.validTo && new Date(promo.validTo) < now) return null;

  return promo;
}

export async function loadGallery(): Promise<GalleryContent> {
  const data = galleryData as GalleryContent;
  return {
    beforeAfter: [...data.beforeAfter].sort((a, b) => a.order - b.order),
    workshop: [...data.workshop].sort((a, b) => a.order - b.order),
  };
}

export async function loadTeam(): Promise<TeamContent> {
  const data = teamData as TeamContent;
  return {
    members: [...data.members].sort((a, b) => a.order - b.order),
  };
}
