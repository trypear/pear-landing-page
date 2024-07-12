import { User } from "@supabase/supabase-js";

export interface PricingTierProps {
  title: string;
  price: string;
  description: string;
  features?: string[];
  buttonText?: string;
  isFree?: boolean;
  priceId?: string;
  user: User | null;
}

export interface PricingPageProps {
  user: User | null;
}

export type PricingTierData = Omit<PricingTierProps, "user">;
