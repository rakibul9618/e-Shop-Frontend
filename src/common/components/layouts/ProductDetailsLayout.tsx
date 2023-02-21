import { ReactNode, useContext, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Accordion from '../elements/Accordion';
import HeroBanner from '../elements/HeroBanner';
import Container from './Container';

import { Menu, MenuButton, MenuItem } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

// icons
import { breakpointContext } from '@/provider/BreakpointProvider';
import { FiPlus } from 'react-icons/fi';
import { HiMinus } from 'react-icons/hi';
import { IoIosArrowDown } from 'react-icons/io';

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
  {
    id: 4,
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

const options = ['Oldest', 'Newest', 'High to Low', 'Low to High', 'Rating'];

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
  const [sortValue, setSortValue] = useState<string>('');
  const { xs, xl } = useContext(breakpointContext);

  // Invoke when user click to request another page.
  const handlePageClick = (): void => {
    // const newOffset = (event.selected * itemsPerPage) % items.length;
    // console.log(`User requested page number ${event.selected}`);
  };
  return (
    <>
      <HeroBanner
        image="/images/products-hero-banner.jpg"
        title="Shop"
        navigation={navigation}
      />
      <Container py={false} className="product_details_layout mt-3 mb-3">
        <div className="pt-2 pb-2 px-2 sidebar">
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
          <div className="flex flex-between items-center gap-10 mb-3 sort_bar">
            <p>200 products available</p>
            <Menu
              menuButton={
                <MenuButton className="flex items-center gap-10">
                  {sortValue ? sortValue : 'Choose one'}{' '}
                  <IoIosArrowDown className="icon" />
                </MenuButton>
              }
              transition
              onItemClick={(e): void => setSortValue(e.value)}
            >
              {options.map((option) => (
                <MenuItem value={option} key={option}>
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </div>
          <div className="grid_product_layout">{children}</div>
          <div className="pagination_wrapper mt-10">
            <ReactPaginate
              nextLabel=">>"
              onPageChange={handlePageClick}
              pageRangeDisplayed={xs ? 1 : 2}
              marginPagesDisplayed={xl ? 1 : 2}
              pageCount={30}
              previousLabel="<<"
              pageClassName="page_item"
              previousLinkClassName="previous_link"
              nextLinkClassName="next_link"
              breakLabel="..."
              breakClassName="page_item"
              breakLinkClassName="page_link"
              containerClassName="pagination"
              activeClassName="active"
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default ProductDetailsLayout;
