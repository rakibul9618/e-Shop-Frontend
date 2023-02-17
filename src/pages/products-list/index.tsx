import ProductDetailsLayout from '@/components/layouts/ProductDetailsLayout';
import { productListType } from '@/types/product';
import { NextPage } from 'next';

import slider1 from '@/images/products/slider1.png';
import slider2 from '@/images/products/slider2.png';
import slider3 from '@/images/products/slider3.png';
import ProductCard from '@/components/elements/ProductCard';

const productList: productListType[] = [
  {
    id: 1,
    title: 'T-shirt',
    thumb: '/images/products/product1.png',
    details:
      'In ornare lorem ut est dapibus, ut tincidunt nisi pretium. Integer ante est, elementum eget magna. Pellentesque sagittis dictum libero, eu dignissim tellus.',
    size: ['xs', 's', 'm', 'l', 'xl'],
    images: [slider1, slider2, slider3],
    offer: 15,
    price: 100,
    href: '/',
    review: [4.3, 4.3, 4.3],
    infoList: [
      {
        id: 1,
        title: 'In stock',
      },
      {
        id: 2,
        title: 'Free delivery available',
      },
      {
        id: 3,
        title: 'Sales 30% Off Use Code: MOTIVE30',
      },
    ],
  },
  {
    id: 2,
    title: "Women's jacket",
    thumb: '/images/products/product2.png',
    details:
      'In ornare lorem ut est dapibus, ut tincidunt nisi pretium. Integer ante est, elementum eget magna. Pellentesque sagittis dictum libero, eu dignissim tellus.',
    size: ['xs', 's', 'm', 'l', 'xl'],
    images: [slider1, slider2, slider3],
    offer: 15,
    price: 100,
    href: '/',
    review: [4.3, 4.3, 4.3],
    infoList: [
      {
        id: 1,
        title: 'In stock',
      },
      {
        id: 2,
        title: 'Free delivery available',
      },
      {
        id: 3,
        title: 'Sales 30% Off Use Code: MOTIVE30',
      },
    ],
  },
  {
    id: 3,
    title: 'Side bag',
    thumb: '/images/products/product3.png',
    details:
      'In ornare lorem ut est dapibus, ut tincidunt nisi pretium. Integer ante est, elementum eget magna. Pellentesque sagittis dictum libero, eu dignissim tellus.',
    size: ['xs', 's', 'm', 'l', 'xl'],
    images: [slider1, slider2, slider3],
    offer: 15,
    price: 100,
    href: '/',
    review: [4.3, 4.3, 4.3],
    infoList: [
      {
        id: 1,
        title: 'In stock',
      },
      {
        id: 2,
        title: 'Free delivery available',
      },
      {
        id: 3,
        title: 'Sales 30% Off Use Code: MOTIVE30',
      },
    ],
  },
  {
    id: 4,
    title: "Men's jacket",
    thumb: '/images/products/product4.png',
    details:
      'In ornare lorem ut est dapibus, ut tincidunt nisi pretium. Integer ante est, elementum eget magna. Pellentesque sagittis dictum libero, eu dignissim tellus.',
    size: ['xs', 's', 'm', 'l', 'xl'],
    images: [slider1, slider2, slider3],
    offer: 15,
    price: 100,
    href: '/',
    review: [4.3, 4.3, 4.3],
    infoList: [
      {
        id: 1,
        title: 'In stock',
      },
      {
        id: 2,
        title: 'Free delivery available',
      },
      {
        id: 3,
        title: 'Sales 30% Off Use Code: MOTIVE30',
      },
    ],
  },
  {
    id: 5,
    title: 'Hat',
    thumb: '/images/products/product5.png',
    details:
      'In ornare lorem ut est dapibus, ut tincidunt nisi pretium. Integer ante est, elementum eget magna. Pellentesque sagittis dictum libero, eu dignissim tellus.',
    size: ['xs', 's', 'm', 'l', 'xl'],
    images: [slider1, slider2, slider3],
    offer: 15,
    price: 100,
    href: '/',
    review: [4.3, 4.3, 4.3],
    infoList: [
      {
        id: 1,
        title: 'In stock',
      },
      {
        id: 2,
        title: 'Free delivery available',
      },
      {
        id: 3,
        title: 'Sales 30% Off Use Code: MOTIVE30',
      },
    ],
  },
  {
    id: 6,
    title: 'Shoe',
    thumb: '/images/products/product6.png',
    details:
      'In ornare lorem ut est dapibus, ut tincidunt nisi pretium. Integer ante est, elementum eget magna. Pellentesque sagittis dictum libero, eu dignissim tellus.',
    size: ['xs', 's', 'm', 'l', 'xl'],
    images: [slider1, slider2, slider3],
    offer: 15,
    price: 100,
    href: '/',
    review: [4.3, 4.3, 4.3],
    infoList: [
      {
        id: 1,
        title: 'In stock',
      },
      {
        id: 2,
        title: 'Free delivery available',
      },
      {
        id: 3,
        title: 'Sales 30% Off Use Code: MOTIVE30',
      },
    ],
  },
  {
    id: 7,
    title: 'wrist',
    thumb: '/images/products/product7.png',
    details:
      'In ornare lorem ut est dapibus, ut tincidunt nisi pretium. Integer ante est, elementum eget magna. Pellentesque sagittis dictum libero, eu dignissim tellus.',
    size: ['xs', 's', 'm', 'l', 'xl'],
    images: [slider1, slider2, slider3],
    offer: 15,
    price: 100,
    href: '/',
    review: [4.3, 4.3, 4.3],
    infoList: [
      {
        id: 1,
        title: 'In stock',
      },
      {
        id: 2,
        title: 'Free delivery available',
      },
      {
        id: 3,
        title: 'Sales 30% Off Use Code: MOTIVE30',
      },
    ],
  },
];

const Shop: NextPage = () => {
  return (
    <ProductDetailsLayout>
      {productList.map((items, ind) => (
        <ProductCard items={items} key={ind} />
      ))}
    </ProductDetailsLayout>
  );
};

export default Shop;
