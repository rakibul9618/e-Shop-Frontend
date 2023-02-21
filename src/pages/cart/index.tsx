import CartProduct from '@/components/elements/CartProduct';
import OrderSummeryCard from '@/components/elements/OrderSummeryCard';
import Container from '@/components/layouts/Container';
import { products } from '@/components/layouts/Header';
import { NextPage } from 'next';
import Link from 'next/link';

const Cart: NextPage = () => {
  return (
    <Container Class="cart_wrapper" className="grid gap-30 col-xl-60">
      <div className="grid gap_row-40 product_list">
        {products.map((item) => (
          <CartProduct
            image={item.image}
            title={item.title}
            price={item.price.toString()}
            key={item.id}
          />
        ))}
      </div>
      <div className="product_summery">
        <div className="sticky top-30 order__summery">
          <OrderSummeryCard />
          <Link
            href="/check-out"
            className="block text-center mt-3 primary-btn radius-1 w-100 px-2 py-1"
          >
            Process to Checkout
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Cart;
