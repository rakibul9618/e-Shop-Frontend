import FlashSell from '@/components/elements/FlashSell';
import ProductOverlay from '@/components/elements/ProductOverlay';
import Category from '@/modules/category/Category';
import Cta from '@/modules/cta/Cta';
import Offers from '@/modules/hero_section/Offers';
import Products from '@/modules/products/Products';
import { productListType } from '@/types/product';
import { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';

// images
import ctaImage from '@/images/products/cta.jpg';
import slider1 from '@/images/products/slider1.png';
import slider2 from '@/images/products/slider2.png';
import slider3 from '@/images/products/slider3.png';

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

const Home: NextPage = () => {
  const [overlay, setOverlay] = useState<boolean>(false);

  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <Offers />
        <Category />
        <Products list={productList} title="New arrival" />
        <FlashSell />
        <Products list={productList} title="Trending Collections" />
        <Cta image={ctaImage} />
        <div className="trial">
          <button onClick={(): void => setOverlay(true)}>Click me</button>
          <ProductOverlay useOverlay={[overlay, setOverlay]} />
        </div>
      </>
    </div>
  );
};

export default Home;
