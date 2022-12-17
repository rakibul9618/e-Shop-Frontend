import Image from 'next/image';
import { useRef, useState } from 'react';
import Head from 'next/head';
import Header from '@/components/layouts/Header';
import Offers from '@/modules/hero_section/Offers';
import Category from '@/modules/category/Category';
import Products from '@/modules/products/Products';
import Cta from '@/modules/cta/Cta';
import Overlay from '@/components/shared/Overlay';
import Footer from '@/components/layouts/Footer';

// images
import ctaImage from '@/images/products/cta.jpg';
import slider1 from '@/images/products/slider1.png';
import slider2 from '@/images/products/slider2.png';
import slider3 from '@/images/products/slider3.png';
import Count from '@/components/shared/Count';

// icons
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import { GiCheckMark } from 'react-icons/gi';
import { AiOutlineHeart } from 'react-icons/ai';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';

// import required modules
import { EffectCreative, FreeMode, Navigation, Thumbs } from 'swiper';

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

const images = [slider1, slider2, slider3];

export default function Home() {
  const [count, setCount] = useState(0);
  const click = useRef(null);

  const decrement = (id) => {
    if (count > 0) setCount(count - 1);
  };

  // thumb
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
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
      <Products list={productList} title="Trending Collections" />
      <Cta image={ctaImage} />
      <div className="trial">
        <button ref={click}>Click me</button>
        <Overlay getRef={click}>
          <div className="grid gap-50 product_content">
            <div className="image_slider">
              <Swiper
                grabCursor={true}
                modules={[Thumbs]}
                thumbs={{
                  swiper:
                    thumbsSwiper && !thumbsSwiper.destroyed
                      ? thumbsSwiper
                      : null,
                }}
                className="mySwiper2"
              >
                {images.map((item, ind) => (
                  <SwiperSlide key={ind}>
                    <div className="pointer image_holder">
                      <Image src={item} alt="product" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={2}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper mt-3"
                breakpoints={{
                  '420': {
                    slidesPerView: 3,
                    spaceBetween: 10,
                  },
                  '576': {
                    slidesPerView: 5,
                    spaceBetween: 10,
                  }
                }}
              >
                {images.map((item, ind) => (
                  <SwiperSlide key={ind}>
                    <div className="pointer image_holder">
                      <Image src={item} alt="product" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="product_details">
              <div className="flex gap-20 items-center pb-3 review">
                <div className="flex gap-5 stars">
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarHalf />
                  <BsStar />
                </div>
                <p> (1 reviews)</p>
              </div>
              <h4 className="md_title pt-3">Serif Coffee Table</h4>
              <h5 className="sm_title mt-1">$155.00</h5>
              <ul className="mt-3 features">
                <li className="text-700 text-primary mt-1">
                  <GiCheckMark className="check mr-2" />
                  In stock
                </li>
                <li className="text-700 text-primary mt-1">
                  <GiCheckMark className="check mr-2" />
                  Free delivery available
                </li>
                <li className="text-700 text-primary mt-1">
                  <GiCheckMark className="check mr-2" />
                  Sales 30% Off Use Code: MOTIVE30
                </li>
              </ul>
              <p className="mt-3">
                In ornare lorem ut est dapibus, ut tincidunt nisi pretium.
                Integer ante est, elementum eget magna. Pellentesque sagittis
                dictum libero, eu dignissim tellus.
              </p>
              <div className="mt-3 flex items-center gap-20 size_wrapper">
                <h6 className="xs_title">Size:</h6>
                <ul className="flex flex-wrap gap-10 items-center size">
                  <li className="flex-middle">xs</li>
                  <li className="flex-middle">s</li>
                  <li className="flex-middle">m</li>
                  <li className="flex-middle">l</li>
                  <li className="flex-middle">xl</li>
                </ul>
              </div>
              <div className="flex flex-col flex-sm-row gap-20 mt-5 action_cart">
                <Count
                  count={count}
                  increment={() => setCount(count + 1)}
                  decrement={decrement}
                />
                <button className="primary-btn">add to cart</button>
                <button className="flex-middle whitelist">
                  <AiOutlineHeart />
                </button>
              </div>
            </div>
          </div>
        </Overlay>
      </div>
      <Footer />
    </div>
  );
}
