// import ComponentLayout from '@/components/layouts/ComponentLayout';
import OrderSummeryCard from '@/components/elements/OrderSummeryCard';
import Overlay from '@/components/elements/Overlay';
import ComponentLayout from '@/components/layouts/ComponentLayout';
import Container from '@/components/layouts/Container';
import { ShippingAddress } from '@/schema/ShippingAddress';
import { ErrorMessage } from '@hookform/error-message';
import { zodResolver } from '@hookform/resolvers/zod';
import { NextPage } from 'next';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const checkoutProducts = [
  {
    id: 1,
    name: 'Preschool Flex',
    amount: '2',
    price: '100',
  },
  {
    id: 2,
    name: 'Hiking Boots',
    amount: '1',
    price: '80',
  },
  {
    id: 3,
    name: 'T-shirt',
    amount: '5',
    price: '250',
  },
];

const addressInput = [
  {
    id: 1,
    label: 'First Name:',
    name: 'firstName',
    type: 'text',
    placeholder: 'First Name',
    isSelect: false,
  },
  {
    id: 2,
    label: 'Last Name:',
    name: 'lastName',
    type: 'text',
    placeholder: 'Last Name',
    isSelect: false,
  },
  {
    id: 3,
    label: 'Email:',
    name: 'email',
    type: 'email',
    placeholder: 'Email',
    isSelect: false,
  },
  {
    id: 4,
    label: 'Phone:',
    name: 'phone',
    type: 'tel',
    placeholder: 'Phone',
    isSelect: false,
  },
  {
    id: 5,
    label: 'Division:',
    name: 'division',
    type: 'text',
    placeholder: 'Division',
    isSelect: false,
  },
  {
    id: 6,
    label: 'District:',
    name: 'district',
    type: 'text',
    placeholder: 'District',
    isSelect: false,
  },
  {
    id: 7,
    label: 'Area:',
    name: 'area',
    type: 'text',
    placeholder: 'Town/City',
    isSelect: false,
  },
  {
    id: 8,
    label: 'Address:',
    name: 'address',
    type: 'text',
    placeholder: 'House number and street name',
    isSelect: false,
  },
];

const CheckOut: NextPage = () => {
  const [overlay, setOverlay] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(ShippingAddress),
  });

  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
  const handleOnsubmit = (e: any): void => {
    // const [addAddress, setAddAddress] = useState<boolean>(false);
    // console.log(e);
  };

  // useEffect(() => {
  //   // console.log(btnRef.current);
  // }, [btnRef]);
  return (
    <ComponentLayout>
      <Container Class="cart_wrapper" className="grid gap-30 col-xl-60">
        <div className="shipping_info">
          <h3 className="md_title pb-1 bb-light_gray">Shipping Address:</h3>

          <button
            className="primary-btn px-5 py-1 mt-4 radius-1"
            onClick={(): void => setOverlay(true)}
          >
            Add New Address
          </button>
        </div>
        <div className="product_summery">
          <div className="sticky top-30 order__summery">
            <OrderSummeryCard products={checkoutProducts} />
            <button className="mt-3 primary-btn radius-1 w-100 px-2 py-1">
              Process to Checkout
            </button>
          </div>
        </div>
        <Overlay useOverlay={[overlay, setOverlay]}>
          <form
            onSubmit={handleSubmit((d) => handleOnsubmit(d))}
            className="grid col-md-2 gap_row-20 gap_col-30 mt-6"
          >
            {addressInput.map(({ id, name, type, placeholder, label }) => {
              // console.log('outside', errors[name]);
              return (
                <div className="cls" key={id}>
                  <label className="block mb-half">{label}</label>
                  <input
                    className="w-100 px-3 py-2 radius-1"
                    type={type}
                    {...register(name)}
                    placeholder={placeholder}
                  />
                  <ErrorMessage
                    errors={errors}
                    name={name}
                    render={({ message }): any => (
                      <p className="text-error font-600">{message}</p>
                    )}
                  />
                </div>
              );
            })}
            <button
              className="primary-btn px-5 py-1 radius-1 justify_self-end col-md-span-2"
              type="submit"
            >
              Save
            </button>
          </form>
        </Overlay>
      </Container>
    </ComponentLayout>
  );
};

export default CheckOut;
