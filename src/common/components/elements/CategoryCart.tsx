import { CategoryCartType } from '@/types/shared';
import Image from 'next/image';
import Link from 'next/link';

const CategoryCart: React.FC<CategoryCartType> = ({ items }) => {
  const { id, title, image, href } = items;
  return (
    <Link href={href} className="category_cart" key={id}>
      <div className="flex-middle overflow-hidden category_image">
        <Image src={image} alt={title} width={400} height={400} />
      </div>
      <p className="sm_title text-700 mt-2 text-center">{title}</p>
    </Link>
  );
};

export default CategoryCart;
