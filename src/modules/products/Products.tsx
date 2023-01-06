import { useRef, useState } from 'react';
import Container from '@/components/layouts/Container'
import ProductCard from '@/components/shared/ProductCard'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

// import required modules
import { FreeMode } from "swiper";

// icons
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';


const breakpoint = {
    400: {
        slidesPerView: 2,
        spaceBetween: 20,
        slidesPerGroup: 2
    },
    600: {
        slidesPerView: 3,
        spaceBetween: 20,
        slidesPerGroup: 3
    },
    1000: {
        slidesPerView: 4,
        spaceBetween: 40,
        slidesPerGroup: 4
    }
}

const Products = ({ list, title }) => {
    const swiperRef = useRef();
    const [handle, setHandle] = useState(false);
    const tryOne = () => {
        setHandle(true)
    }
    return (
        <Container className={handle ? "stop" : ""}>
            <div className="flex flex-between items-center gap-20 header_arrow">
                <h3 className="lg_title">{title}</h3>
                <div className="flex-middle gap-20">
                    <div className='flex-middle pointer swiper_arrow' onClick={() => swiperRef.current?.slidePrev()}><AiOutlineArrowLeft /></div>
                    <div className='flex-middle pointer swiper_arrow' onClick={() => swiperRef.current?.slideNext()}><AiOutlineArrowRight /></div>
                </div>
            </div>
            <div className="mt-8 card_list">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    freeMode={true}
                    modules={[FreeMode]}
                    className="mySwiper"
                    breakpoints={breakpoint}
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                >
                    {list.map((items, ind) => (
                        <SwiperSlide key={ind}>
                            <ProductCard items={items} setHandle={setHandle} />
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </Container>
    )
}

export default Products