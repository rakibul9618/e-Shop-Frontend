import Container from '@/components/layouts/Container';
import Accordion from '@/components/shared/Accordion';
import { NextPage } from 'next';

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

const Shop: NextPage = () => {
  return (
    <Container>
      <h1>shop</h1>
      {accordionList.map(({ id, title, items }) => (
        <Accordion title={title} key={id}>
          {items.map((item) => (
            <div className="input_group" key={item.id}>
              <input
                type="checkbox"
                id="demoCheckbox"
                name="checkbox"
                value="1"
              />
              <label htmlFor="demoCheckbox">{item.title}</label>
            </div>
          ))}
        </Accordion>
      ))}
    </Container>
  );
};

export default Shop;
