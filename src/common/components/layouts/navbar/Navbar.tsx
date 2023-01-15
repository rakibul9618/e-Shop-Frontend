/* eslint-disable react/display-name */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// icons
import { GiHamburgerMenu } from 'react-icons/gi';

interface navbarPropsType {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

interface navbarBrandPropsType {
  href: string;
  logo: any;
}

interface navbarTogglePropsType {
  [x: string]: string;
}

interface navbarLinksComponentPropsType {
  children: React.ReactNode;
  className?: string;
}

interface navbarButtonComponentPropsType {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

type NavbarComponentTypes = {
  Brand: React.FC<navbarBrandPropsType>;
  Toggle: React.FC<navbarTogglePropsType>;
  Links: React.FC<navbarLinksComponentPropsType>;
  Button: React.FC<navbarButtonComponentPropsType>;
};

const Navbar: React.FC<navbarPropsType> & NavbarComponentTypes = ({
  children,
  className,
}): JSX.Element => {
  return (
    <div
      className={`navbar gap-10 gap-md-30 gap-xl-100 ${
        className ? className : ''
      }`}
    >
      {children}
    </div>
  );
};

Navbar.Brand = ({ href = '/', logo }): JSX.Element => {
  return (
    <div className="logo">
      <Link href={href}>
        <Image src={logo} alt="Brand logo" />
      </Link>
    </div>
  );
};

Navbar.Toggle = ({ ...rest }): JSX.Element => {
  return (
    <div className="nav_toggle_btn" {...rest}>
      <GiHamburgerMenu />
    </div>
  );
};

Navbar.Links = ({ children, className }): JSX.Element => {
  return (
    <div className={`nav_links ${className ? className : ''}`}>{children}</div>
  );
};

Navbar.Button = ({ children, onClick, className }): JSX.Element => {
  return (
    <button
      className={`nav_btn ${className ? className : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

// const Navbar: NavbarType = NavbarComponent;
//  Navbar.Brand = BrandComponent
//  Navbar.Toggle = ToggleComponent
//  Navbar.Links = LinksComponent
//  Navbar.Button = ButtonComponent

export default Navbar;
