import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// icons
import { FiEye } from 'react-icons/fi';
import { AiOutlineHeart } from 'react-icons/ai';
import Price from './Price';
import OfferBadge from '@/components/shared/OfferBadge';

const ProductCard = ({ items, setHandle }) => {
    const view = useRef(null)

    const { title, thumb, offer, href, price, details, size, images, review, infoList } = items;

    return (
        <>
            <div className='product_cart'>
                <div className="relative overflow-hidden radius-1 select-none image_holder">
                    <Link href={href} className=" block">
                        <Image src={thumb} alt={title} width={700} height={700} />
                        {offer && <OfferBadge offer={offer} />}
                    </Link>
                    <ul className="absolute flex flex-center gap-10 flex-col flex-md-row product_action">
                        <li className="flex-middle pointer items"><AiOutlineHeart /></li>
                        <li className="secondary-btn pointer text-center items">Add to Cart</li>
                        <li className="flex-middle pointer items" ref={view}><FiEye /></li>
                    </ul>
                </div>
                <div className="text-center mt-2 content">
                    <Link href={href}>
                        <h5 className="sm_title text-400">{title}</h5>
                    </Link>
                    <Price price={price} offer={offer} />
                </div>
            </div>

        </>

    )
}

export default ProductCard