import { ReactNode } from 'react';
import Accordion from '../elements/Accordion';
import HeroBanner from '../elements/HeroBanner';
import Container from './Container';
import Layout from './Layout';

// icons
import { FiPlus } from 'react-icons/fi';
import { HiMinus } from 'react-icons/hi';

const accordionList = [
  {
    id: 1,
    title: 'Category',
    items: [
      {
        id: 1,
        title: 'Sun Care',
      },
      {
        id: 2,
        title: 'Sun Care',
      },
      {
        id: 3,
        title: 'Sun Care',
      },
    ],
  },
  {
    id: 2,
    title: 'Category',
    items: [
      {
        id: 1,
        title: 'Sun Care',
      },
      {
        id: 2,
        title: 'Sun Care',
      },
      {
        id: 3,
        title: 'Sun Care',
      },
    ],
  },
  {
    id: 3,
    title: 'Category',
    items: [
      {
        id: 1,
        title: 'Sun Care',
      },
      {
        id: 2,
        title: 'Sun Care',
      },
      {
        id: 3,
        title: 'Sun Care',
      },
    ],
  },
];

const navigation = [
  {
    id: 1,
    title: 'Home',
    link: '/',
  },
  {
    id: 1,
    title: 'Products',
    link: '/',
  },
];

type props = {
  children: ReactNode;
};

type titleProps = {
  title: string;
};
const AccordionTitle: React.FC<titleProps> = ({ title }) => {
  return (
    <div className="flex flex-between items-center pb-1 mb-2 w-100 title relative">
      <span>{title}</span>
      <FiPlus className="plus" />
      <HiMinus className="minus" />
    </div>
  );
};

const ProductDetailsLayout: React.FC<props> = ({ children }) => {
  return (
    <Layout>
      <HeroBanner
        image="/images/products-hero-banner.jpg"
        title="Shop"
        navigation={navigation}
      />
      <Container className="product_details_layout">
        <div className="sidebar">
          {accordionList.map(({ id, title, items }) => (
            <Accordion
              title={<AccordionTitle title={title} />}
              key={id}
              isActive={true}
            >
              <div className="pb-3">
                {items.map((item) => (
                  <div
                    className="input_group flex flex-row gap-10 items-center pointer"
                    key={item.id}
                  >
                    <input
                      type="checkbox"
                      id="demoCheckbox"
                      name="checkbox"
                      value="1"
                      className="pointer"
                    />
                    <label className="pointer" htmlFor="demoCheckbox">
                      {item.title}
                    </label>
                  </div>
                ))}
              </div>
            </Accordion>
          ))}
        </div>
        <div className="products">
          <div className="sort_bar"></div>
          <div>{children}</div>
        </div>
      </Container>
    </Layout>
  );
};

export default ProductDetailsLayout;
