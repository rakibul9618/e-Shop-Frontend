import ProductDetailsLayout from '@/components/layouts/ProductDetailsLayout';
import { NextPage } from 'next';

const Shop: NextPage = () => {
  return (
    <ProductDetailsLayout>
      <h1>no product found</h1>
    </ProductDetailsLayout>
  );
};

export default Shop;
