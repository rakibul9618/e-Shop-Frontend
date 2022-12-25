import { useRef } from 'react';
import Head from 'next/head';
import Header from '@/components/layouts/Header';
import Offers from '@/modules/hero_section/Offers';
import Category from '@/modules/category/Category';
import Products from '@/modules/products/Products';
import Cta from '@/modules/cta/Cta';
import Footer from '@/components/layouts/Footer';

// images
import ctaImage from '@/images/products/cta.jpg';
import slider1 from '@/images/products/slider1.png';
import slider2 from '@/images/products/slider2.png';
import slider3 from '@/images/products/slider3.png';

// icons
import ProductOverlay from '@/components/shared/ProductOverlay';
import FlashSell from '@/components/elements/FlashSell';

const productList = [
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
    review: 4.3,
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
    review: 4.3,
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
    review: 4.3,
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
    review: 4.3,
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
    review: 4.3,
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
    review: 4.3,
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



export default function Home() {

  const click = useRef(null);




  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Offers />
      <Category />
      <Products list={productList} title="New arrival" />
      <FlashSell/>
      <Products list={productList} title="Trending Collections" />
      <Cta image={ctaImage} />
      <div className="trial">
        <button ref={click}>Click me</button>
        <ProductOverlay getRef={click} />
      </div>
      <Footer />
    </div>
  );
}
