import { StaticImageData } from 'next/image';
import { BsCart2 } from 'react-icons/bs';
import ImageWithClose from '../shared/ImageWithClose';
import Count from './Count';

interface propsType {
  image: string | StaticImageData;
  title: string;
  price: string;
  addToCart?: () => any;
}

const CartProduct: React.FC<propsType> = ({
  image,
  title,
  price,
  addToCart,
}) => {
  return (
    <div className="grid gap-10 gap-sm-20 items-center single_cart_product">
      <ImageWithClose
        className="image"
        image={image}
        onCloseClick={(): any => ''}
      />
      <p className="title_des single-line product_title">{title}</p>

      {addToCart ? (
        <div className="grid col-2 col-sm-3 items-center justify_items-center details">
          <p className="sm_title justify_self-center">${price}</p>
          <p className="sm_title text-500 text-gray justify_self-center sub_total">
            In Stock
          </p>
          <button className="primary-btn radius-1 px-3 py-1">
            <span>Add to Cart</span>
            <BsCart2 />
          </button>
        </div>
      ) : (
        <div className="grid col-2 col-sm-3 items-center justify_items-center prices">
          <p className="sm_title justify_self-center">${price}</p>
          <Count
            increment={(): any => ''}
            decrement={(): any => ''}
            count={5}
          />
          <p className="sm_title justify_self-center sub_total">${price}</p>
        </div>
      )}
    </div>
  );
};

export default CartProduct;
