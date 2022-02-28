export interface Business {
  id: string;
  name: string;
  image_url: string;
  price: string;
  review_count: number;
  rating: number;
}

export interface BusinessDetail {
  name: string;
  photos: string[];
}
