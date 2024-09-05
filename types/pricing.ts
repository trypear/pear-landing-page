import { User } from "@supabase/supabase-js";

export interface PricingTierProps {
  title: string;
  price: string;
  prevPrice?: string;
  description: string;
  features?: string[];
  buttonText?: string;
  isFree?: boolean;
  priceId?: string;
  user: User | null;
  index: number;
  priceUnit?: string; // Added new field
}

export interface PricingPageProps {
  user: User | null;
}

export type PricingTierData = Omit<PricingTierProps, "user">;
