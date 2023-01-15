/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/display-name */
// icons
import { IoClose } from 'react-icons/io5';
import { ImArrowLeft2 } from 'react-icons/im';
import { MouseEventHandler, ReactNode } from 'react';

interface ToggleType {
  [x: string]: any;
}

interface ContentType {
  children: ReactNode;
  className: string;
}

interface InnerType {
  children: ReactNode;
  Class: string;
  id: number;
  activeNumber: number | boolean | null;
  onArrowClick: MouseEventHandler<SVGElement>;
}

type DrawerComponentTypes = {
  Toggle: React.FC<ToggleType>;
  Content: React.FC<ContentType>;
  Inner: React.FC<InnerType>;
};

interface DrawerType {
  children: ReactNode;
  className: string;
  isActive: boolean;
  align?: string;
}

const Drawer: React.FC<DrawerType> & DrawerComponentTypes = ({
  children,
  className,
  isActive,
  align = 'right',
}) => {
  return (
    <div
      className={`drawer  ${className ? className : ''} ${
        isActive ? 'active' : ''
      } ${align}`}
    >
      <div className="relative h-100">
        <div className="back_slider"></div>
        {children}
      </div>
    </div>
  );
};

Drawer.Toggle = ({ ...rest }) => {
  return (
    <div className="drawer_toggle" {...rest}>
      <IoClose />
    </div>
  );
};

Drawer.Content = ({ children, className }) => {
  return <div className={`drawer_content ${className}`}>{children}</div>;
};

Drawer.Inner = ({
  children,
  Class = 'one',
  id,
  activeNumber,
  onArrowClick,
}) => {
  return (
    <div
      className={`inner_drawer ${Class} ${activeNumber === id ? 'active' : ''}`}
    >
      <ImArrowLeft2 className="left_arrow" onClick={onArrowClick} />
      {children}
    </div>
  );
};

export default Drawer;
