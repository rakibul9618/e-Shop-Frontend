import CartProduct from '@/components/elements/CartProduct';
import Container from '@/components/layouts/Container';
import { products } from '@/components/layouts/Header';
import { NextPage } from 'next';

const WishList: NextPage = () => {
  return (
    <Container Class="wish_list_wrapper" className="grid">
      <div className="grid gap_row-40 product_list">
        {products.map((item) => (
          <CartProduct
            image={item.image}
            title={item.title}
            price={item.price.toString()}
            key={item.id}
            addToCart={(): any => ''}
          />
        ))}
      </div>
    </Container>
  );
};

export default WishList;
