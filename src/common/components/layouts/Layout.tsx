import { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';

interface propsType {
  children: ReactNode;
}

const Layout: React.FC<propsType> = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="min-height">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
