import { StaticImageData } from 'next/image';
import { ReactNode } from 'react';
import { productListType } from './product';

export interface countPropsType {
  increment: React.MouseEventHandler<SVGElement>;
  decrement: React.MouseEventHandler<SVGElement>;
  count: number;
}

export interface CategoryCartType {
  items: {
    id: number;
    title: string;
    image: string;
    href: string;
  };
}

export interface StaticImageDataWithString extends StaticImageData {
  toString(): string;
}

export interface imageType {
  image: StaticImageDataWithString;
}

export interface offerPropsType {
  offer: number;
}

export interface overlayPropsType {
  children: ReactNode;
  useOverlay: any[];
}

export interface pricePropsType {
  price: number;
  offer: number;
  align?: string;
}

export interface productCardPropsType {
  items: productListType;
}

export interface productOverlayPropsType {
  useOverlay: any[];
}
