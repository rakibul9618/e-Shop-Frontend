import { StaticImageDataWithString } from '@/types/shared';

export interface productType {
  id: number;
  title: string;
  count: boolean;
  price: boolean;
  image: string;
}

export interface productListType {
  id: number;
  title: string;
  thumb: string;
  details: string;
  size: string[];
  images: StaticImageDataWithString[];
  offer: number;
  price: number;
  href: string;
  review: number[];
  infoList: {
    id: number;
    title: string;
  }[];
}
