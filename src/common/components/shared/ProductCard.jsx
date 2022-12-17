import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// icons
import { FiEye } from 'react-icons/fi';
import { AiOutlineHeart } from 'react-icons/ai';

const ProductCard = ({ items, setHandle }) => {
    const view = useRef(null)

    const { title, thumb, offer, href, price, details, size, images, review, infoList } = items;
    let offerPrice;

    if (offer) {
        offerPrice = Math.ceil((price - (price * offer) / 100));

    }
    return (
        <>
            <div className='product_cart'>
                <div className="relative overflow-hidden radius-1 select-none image_holder">
                    <Link href={href} className=" block">
                        <Image src={thumb} alt={title} width={700} height={700} />
                        {offer && <div className="absolute offer_amount">{offer}% off</div>}
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
                    <h5 className="flex-middle gap-10 mt-1 sm_title">
                        {offer ?
                            (
                                <>
                                    <span className="offer_price">${price}</span>
                                    <span>${offerPrice}</span>
                                </>
                            ) : <span>${price}</span>}
                    </h5>
                </div>
            </div>

        </>

    )
}

export default ProductCard