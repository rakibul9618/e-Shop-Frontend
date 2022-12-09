import Link from 'next/link';
import Image from 'next/image';

// icons
import { GiHamburgerMenu } from 'react-icons/gi';



const Navbar = ({ children, className }) => {

  return (
    <div className={`navbar gap-10 gap-md-30 gap-xl-100 ${className ? className : ""}`}>
      {children}
    </div>
  )
}


Navbar.Brand = ({ href = '/', logo }) => {
  return (
    <div className="logo">
      <Link href={href}>
        <Image src={logo} alt="Brand logo" />
      </Link>
    </div>
  )
}

Navbar.Toggle = ({ ...rest }) => {
  return (
    <div className="nav_toggle_btn" {...rest}>
      <GiHamburgerMenu />
    </div>
  )
}

Navbar.Links = ({ children, className }) => {
  return (
    <div className={`nav_links ${className ? className : ""}`}>
      {children}
    </div>
  )
}


Navbar.Button = ({ children, onClick, className }) => {
  return (
    <button className={`nav_btn ${className ? className : ""}`} onClick={onClick}>
      {children}
    </button>
  )
}

export default Navbar;