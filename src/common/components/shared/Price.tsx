import { pricePropsType } from '@/types/shared';

const Price: React.FC<pricePropsType> = ({
  price,
  offer,
  align = 'middle',
}) => {
  align = align === 'middle' ? 'flex-middle' : 'flex items-center';
  let oldPrice;

  if (offer) {
    oldPrice = Math.ceil(price - (price * offer) / 100);
  }
  return (
    <h5 className={` ${align} gap-10 mt-1 sm_title price`}>
      {offer ? (
        <>
          <span className="old_price">${price}</span>
          <span>${oldPrice}</span>
        </>
      ) : (
        <span>${price}</span>
      )}
    </h5>
  );
};

export default Price;
