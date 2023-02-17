const radioInput = [
  {
    id: 1,
    label: 'Free Shipping',
    name: 'shipping',
    value: 'free',
  },
  {
    id: 2,
    label: 'Local',
    name: 'shipping',
    value: 'local',
  },
  {
    id: 3,
    label: 'Flat rate',
    name: 'shipping',
    value: 'flat',
  },
];

type propsType = {
  products?: any[];
};

const OrderSummeryCard: React.FC<propsType> = ({ products = [] }) => {
  return (
    <div className="px-4 py-4 order_summery_card">
      {products.length > 0 && (
        <>
          <div className="sub_total mb-1 section_border_bottom">
            <h6 className="xs_title">Products</h6>
          </div>
          <div className="product_list mb-2">
            {products.map(({ id, name, amount, price }) => (
              <div className="flex gap-30 flex-between" key={id}>
                <p className="flex gap-5">
                  <span className="single-line">{name}</span>
                  <span>×</span>
                  <span>{amount}</span>
                </p>
                <p>${price}</p>
              </div>
            ))}
          </div>
        </>
      )}
      <div className="sub_total flex gap-20 flex-between mb-1 section_border_bottom">
        <h6 className="xs_title">Subtotal</h6>
        <h6 className="xs_title">$5000</h6>
      </div>
      <div className="section_border_bottom mb-3 shipping">
        <h4 className="flex flex-between gap-20 xs_title mb-2">
          <span> Shipping :</span> <span>$30</span>
        </h4>
        {radioInput.map(({ id, label, name, value }) => (
          <div className="flex gap-10  ml-1 mt-1" key={id}>
            <input
              className="pointer"
              type="radio"
              id={value}
              name={name}
              value={value}
            />
            <label className="pointer" htmlFor={value}>
              {label}
            </label>
          </div>
        ))}
      </div>
      <div className="flex flex-between gap total">
        <h5 className="sm_title">Total:</h5>
        <h5 className="sm_title">$50000</h5>
      </div>
    </div>
  );
};

export default OrderSummeryCard;
