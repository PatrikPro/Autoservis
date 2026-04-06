export interface SiteContent {
  brandName: string;
  hero: {
    headline: string;
    subheadline: string;
    ctaLabel: string;
    ctaHref: string;
    secondaryCtaLabel: string;
    secondaryCtaHref: string;
  };
  about: { title: string; text: string };
  whyUs: {
    sectionLabel: string;
    title: string;
    items: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
  };
  testimonials: {
    sectionLabel: string;
    title: string;
    items: Array<{
      name: string;
      text: string;
      vehicle: string;
    }>;
  };
  sectionTitles: Record<string, string>;
  contact: {
    address: string;
    phone: string;
    email: string;
    mapEmbedUrl: string;
  };
}

export interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  order: number;
}

export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  category: string;
  badge?: string;
  available: boolean;
  order: number;
}

export interface ServicesContent {
  categories: ServiceCategory[];
  items: ServiceItem[];
}

export interface VehicleCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  multiplier: number;
}

export interface VehiclesContent {
  categories: VehicleCategory[];
}

export interface OpeningDay {
  label: string;
  hours?: string;
  closed?: boolean;
  note?: string;
}

export interface OpeningHoursContent {
  days: OpeningDay[];
  note?: string;
}

export interface PromoContent {
  isActive: boolean;
  headline: string;
  text: string;
  ctaLabel: string;
  ctaHref: string;
  validFrom?: string;
  validTo?: string;
  icon?: string;
}

export interface BeforeAfterImage {
  id: string;
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  title: string;
  order: number;
}

export interface WorkshopImage {
  id: string;
  src: string;
  alt: string;
  order: number;
}

export interface GalleryContent {
  beforeAfter: BeforeAfterImage[];
  workshop: WorkshopImage[];
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  order: number;
}

export interface TeamContent {
  members: TeamMember[];
}
