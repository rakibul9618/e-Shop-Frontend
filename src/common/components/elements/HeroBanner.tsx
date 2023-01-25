import Image from 'next/image';
import Link from 'next/link';

interface heroBannerProps {
  image: string;
  title: string;
  navigation?: any;
}

const HeroBanner: React.FC<heroBannerProps> = ({
  image,
  title,
  navigation,
}) => {
  return (
    <div className="products_hero_banner relative overflow-hidden">
      <div className="absolute inset-0">
        <Image src={image} alt="banner" width={1920} height={197} />
      </div>
      <div className="relative-up h-100 flex-middle flex-col">
        <h3 className="lg_title">{title}</h3>
        {navigation && (
          <div className="navigation flex gap-10 mt-1 text-gray">
            {navigation.map((item: any) => (
              <Link href={item.link} key={item.title}>
                <p>{item.title} /</p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroBanner;
