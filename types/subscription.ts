export interface Subscription {
  id?: string;
  subscription_id: string;
  pricing_tier: string;
  status: string;
  current_period_start: number;
  current_period_end: number;
  cancel_at_period_end: boolean;
  canceled_at?: string;
  created_at?: string;
  updated_at?: string;
}
