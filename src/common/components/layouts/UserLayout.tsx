import Container from '@/components/layouts/Container';
import Image from 'next/image';

// images
import profile from '@/images/user/profile.webp';

// icons
import { useRouter } from 'next/router';
import { ReactNode, useEffect, useState } from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsCardList } from 'react-icons/bs';
import { IoSettingsOutline } from 'react-icons/io5';

type propsType = {
  children: ReactNode;
};

const UserLayout: React.FC<propsType> = ({ children }) => {
  const [active, setActive] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    router.pathname === '/user' ? setActive(true) : setActive(false);
  }, [router.pathname]);

  return (
    <Container Class="user_wrapper" className="user grid gap-30">
      <div className="user_sidebar bg-white radius-4">
        <div className="user_title">
          <div className="image relative radius-rounded mx-auto mt-md-3">
            <Image className="radius-rounded" src={profile} alt="user name" />
            <AiOutlineEdit className="edit absolute" />
          </div>
          <h4 className="user_name xs_title mt-1 text-center px-2">
            Md. Rakibul hasan (Rony)
          </h4>
        </div>
        <div className="menu mt-md-4 mb-md-3">
          <div
            className={`menu_list account_setting px-3 py-2 flex items-center gap-10 ${
              active ? 'active' : ''
            }`}
            onClick={(): void => {
              router.push('/user');
            }}
          >
            <IoSettingsOutline /> <span>Account Setting</span>
          </div>
          <div
            className={`menu_list order_list px-3 py-2 flex items-center gap-10 ${
              active ? '' : 'active'
            }`}
            onClick={(): void => {
              router.push('/user/order-list');
            }}
          >
            <BsCardList /> <span>Order List</span>
          </div>
        </div>
      </div>
      <div className="details bg-white radius-4 px-3 px-md-4 py-3 py-md-3">
        {children}
      </div>
    </Container>
  );
};

export default UserLayout;
