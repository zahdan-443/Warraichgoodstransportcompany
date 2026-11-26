export interface VerifiedAggregateRating {
  ratingValue: number;
  reviewCount: number;
  bestRating?: number;
  worstRating?: number;
}

export interface VerifiedCustomerReview {
  authorName: string;
  ratingValue: number;
  reviewBody: string;
  datePublished: string;
  sourceName?: string;
}

/**
 * Verified Google Business Profile aggregate rating.
 * Keep null until populated with real, verifiable Google Business Profile figures
 * (never publish fabricated ratings in structured data).
 */
export const VERIFIED_BUSINESS_RATING: VerifiedAggregateRating | null = null;

/**
 * Verified customer reviews visible on the website / Google Business Profile.
 * Keep empty until real customer review quotes are explicitly added.
 */
export const VERIFIED_CUSTOMER_REVIEWS: VerifiedCustomerReview[] = [];
