import { useState } from 'react';
import Image from 'next/image';
import Overlay from './Overlay';
import OfferBadge from '@/components/shared/OfferBadge';
import Price from './Price';
import Count from './Count';
import { productOverlayPropsType } from '@/types/shared';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';

// icons
import { GiCheckMark } from 'react-icons/gi';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';

// images
// import ctaImage from "@/images/products/cta.jpg";
import slider1 from '@/images/products/slider1.png';
import slider2 from '@/images/products/slider2.png';
import slider3 from '@/images/products/slider3.png';

const images = [slider1, slider2, slider3];

const ProductOverlay: React.FC<productOverlayPropsType> = ({ getRef }) => {
  const [count, setCount] = useState(0);
  // thumb
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  const decrement = (): void => {
    if (count > 0) setCount(count - 1);
  };
  return (
    <Overlay getRef={getRef}>
      <div className="grid gap-50 product_content">
        <div className="image_slider">
          <Swiper
            grabCursor={true}
            modules={[Thumbs]}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            className="mySwiper2"
          >
            {images.map((item, ind) => (
              <SwiperSlide key={ind}>
                <div className="relative image_holder">
                  <Image src={item} alt="product" />
                  <OfferBadge offer={15} />
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
              420: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              576: {
                slidesPerView: 5,
                spaceBetween: 10,
              },
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
          <Price price={155.0} offer={15} align="start" />
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
            In ornare lorem ut est dapibus, ut tincidunt nisi pretium. Integer
            ante est, elementum eget magna. Pellentesque sagittis dictum libero,
            eu dignissim tellus.
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
              increment={(): void => setCount(count + 1)}
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
  );
};

export default ProductOverlay;
