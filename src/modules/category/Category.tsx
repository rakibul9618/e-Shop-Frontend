import { useRef } from 'react';
import Container from '@/components/layouts/Container';
import CategoryCart from '@/components/elements/CategoryCart';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';

// import required modules
import { FreeMode } from 'swiper';

// icons
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

const breakpoint = {
  340: {
    slidesPerView: 2,
    spaceBetween: 10,
    slidesPerGroup: 2,
  },
  500: {
    slidesPerView: 3,
    spaceBetween: 15,
    slidesPerGroup: 2,
  },
  700: {
    slidesPerView: 4,
    spaceBetween: 20,
    slidesPerGroup: 3,
  },
  992: {
    slidesPerView: 5,
    spaceBetween: 30,
    slidesPerGroup: 4,
  },
  1200: {
    slidesPerView: 6,
    spaceBetween: 40,
    slidesPerGroup: 5,
  },
};

const categoryList = [
  {
    id: 1,
    title: 'Computer',
    image: '/images/category/category1.png',
    href: '/',
  },
  {
    id: 2,
    title: 'phones',
    image: '/images/category/category2.png',
    href: '/',
  },
  {
    id: 3,
    title: 'watch',
    image: '/images/category/category3.png',
    href: '/',
  },
  {
    id: 4,
    title: 'tv & audio',
    image: '/images/category/category4.png',
    href: '/',
  },
  {
    id: 5,
    title: 'cameras',
    image: '/images/category/category5.png',
    href: '/',
  },
  {
    id: 6,
    title: 'games',
    image: '/images/category/category6.png',
    href: '/',
  },
  {
    id: 7,
    title: 'Computer',
    image: '/images/category/category1.png',
    href: '/',
  },
  {
    id: 8,
    title: 'phones',
    image: '/images/category/category2.png',
    href: '/',
  },
  {
    id: 9,
    title: 'watch',
    image: '/images/category/category3.png',
    href: '/',
  },
];

const Category: React.FC = () => {
  const swiperRef: any = useRef();
  return (
    <Container>
      <div className="flex flex-between items-center gap-20 header_arrow">
        <h3 className="lg_title">popular Category</h3>
        <div className="flex-middle gap-20">
          <div
            className="flex-middle pointer swiper_arrow"
            onClick={(): void => swiperRef.current?.slidePrev()}
          >
            <AiOutlineArrowLeft />
          </div>
          <div
            className="flex-middle pointer swiper_arrow"
            onClick={(): void => swiperRef.current?.slideNext()}
          >
            <AiOutlineArrowRight />
          </div>
        </div>
      </div>
      <div className=" mt-8 category_list">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          freeMode={true}
          modules={[FreeMode]}
          className="mySwiper"
          breakpoints={breakpoint}
          onBeforeInit={(swiper): void => {
            swiperRef.current = swiper;
          }}
        >
          {categoryList.map((item, ind) => (
            <SwiperSlide key={ind}>
              <CategoryCart items={item} key={ind} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
  );
};

export default Category;
