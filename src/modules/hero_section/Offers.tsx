import Image from 'next/image';
import Link from 'next/link';
import Container from '../../common/components/layouts/Container';

const heroBanner = [
  {
    id: 1,
    title: 'Fresh from  the workshops',
    subtitle: 'Pull out all the stops with DIY gifts',
    image: '/images/home-hero-banner.jpg',
    highlight: true,
    href: '/',
  },
  {
    id: 2,
    title: 'New Deals at Best Prices',
    subtitle: 'From $40.00',
    image: '/images/home-banner-01.jpg',
    highlight: true,
    href: '/',
  },
  {
    id: 3,
    title: 'Colorful Redmi  Note 6 Pro',
    subtitle: 'Price just $120.00',
    image: '/images/home-banner-02.jpg',
    highlight: true,
    href: '/',
  },
  {
    id: 4,
    title: '1000 mAh Power Bank',
    subtitle: 'From $40.00',
    image: '/images/home-banner-03.jpg',
    highlight: true,
    href: '/',
  },
];

const Offers: React.FC = () => {
  return (
    <Container py={false} className="offers grid col-lg-3 gap-30">
      {heroBanner.map((item, ind) => (
        <div
          className="relative overflow-hidden text-white show_case_item"
          key={item.id}
        >
          <Link href="/">
            <div className="absolute inset-0 banner_image">
              <Image
                className="img-cover-center"
                src={item.image}
                alt={item.title}
                width={952}
                height={747}
              />
            </div>
            <div className=" black-layer"></div>
            <div className="relative-up flex flex-col items-start content">
              <h4 className={ind === 0 ? 'lg_title' : 'sm_title'}>
                {item.title}
              </h4>
              <p className="mt-1 text-700">{item.subtitle}</p>
              {ind === 0 ? (
                <button className="mt-2 px-2 py-1 radius-1 white-btn">
                  Shop Now
                </button>
              ) : (
                <button className="mt-5 relative">Shop Now</button>
              )}
            </div>
          </Link>
        </div>
      ))}
    </Container>
  );
};

export default Offers;
