import { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Container from './Container'
import Navbar from './navbar/Navbar'
import Drawer from './Drawer';
import Count from '../shared/Count';
import { breakpointContext } from '@/provider/BreakpointProvider';
import { productType } from '@/types/product';

// logo
import logo from "@/images/logo.png"

// images
import product1 from '@/images/product1.png'
import product2 from '@/images/product2.png'
import product3 from '@/images/product3.png'
import product4 from '@/images/product4.png'
import feature from '@/images/feature.png'
import apparel from '@/images/apparel.png'


// icons
import { BsCart2 } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineSearch } from 'react-icons/ai';
import { RiArrowDownSLine } from 'react-icons/ri';
import { ImArrowRight2 } from 'react-icons/im';
import { HiPlus } from 'react-icons/hi';
import { BiMinus } from 'react-icons/bi';
import { RxCross2 } from 'react-icons/rx';

interface ProductItemsType {
  id: number;
  title: string;
  href: string;
}

interface ProductType {
  id: number;
  title: string;
  image: any;
  items: ProductItemsType []
}


interface DropDownItemsType extends ProductItemsType {
  products?: ProductType []
}



const dropDownItems: DropDownItemsType[] = [
  {
    "id": 1,
    "title": "Trending this week",
    "href": "/"
  },
  {
    "id": 2,
    "title": "New Arrivals",
    "href": "/"
  },
  {
    "id": 3,
    "title": "Men's Fashion",
    "href": "",
    "products": [
      {
        "id": 1,
        "title": "Featured",
        "image": feature,
        "items": [
          {
            "id": 1,
            "title": "New Arrival",
            "href": '/'
          },
          {
            "id": 2,
            "title": "Best Seller",
            "href": '/'
          },
          {
            "id": 3,
            "title": "The Track Collection",
            "href": '/'
          },
          {
            "id": 4,
            "title": "Trending",
            "href": '/'
          },
        ]
      },
      {
        "id": 2,
        "title": "Apparel",
        "image": apparel,
        "items": [
          {
            "id": 1,
            "title": "T-shirts",
            "href": '/'
          },
          {
            "id": 2,
            "title": "Shirts",
            "href": '/'
          },
          {
            "id": 3,
            "title": "Jeans",
            "href": '/'
          }
        ]
      }
    ]
  },
  {
    "id": 4,
    "title": "Women's Fashion",
    "href": "",
    "products": [
      {
        "id": 1,
        "title": "Featured",
        "image": feature,
        "items": [
          {
            "id": 1,
            "title": "New Arrival",
            "href": '/'
          },
          {
            "id": 2,
            "title": "Best Seller",
            "href": '/'
          },
          {
            "id": 3,
            "title": "The Track Collection",
            "href": '/'
          },
          {
            "id": 4,
            "title": "Trending",
            "href": '/'
          },
        ]
      },
      {
        "id": 2,
        "title": "Apparel",
        "image": apparel,
        "items": [
          {
            "id": 1,
            "title": "Jeans",
            "href": '/'
          },
          {
            "id": 2,
            "title": "T-shirts",
            "href": '/'
          },
          {
            "id": 3,
            "title": "Shirts",
            "href": '/'
          },
          {
            "id": 4,
            "title": "Tops",
            "href": '/'
          },
          {
            "id": 5,
            "title": "Jumpsuits",
            "href": '/'
          },
          {
            "id": 6,
            "title": "Coats",
            "href": '/'
          },
          {
            "id": 7,
            "title": "Sweater",
            "href": '/'
          }
        ]
      }
    ],
  },
  {
    "id": 5,
    "title": "Baby Product",
    "href": "",
    "products": [
      {
        "id": 1,
        "title": "Featured",
        "image": feature,
        "items": [
          {
            "id": 1,
            "title": "New Arrival",
            "href": '/'
          },
          {
            "id": 2,
            "title": "Best Seller",
            "href": '/'
          },
          {
            "id": 3,
            "title": "The Track Collection",
            "href": '/'
          },
          {
            "id": 4,
            "title": "Trending",
            "href": '/'
          },
        ]
      },
      {
        "id": 2,
        "title": "Apparel",
        "image": apparel,
        "items": [
          {
            "id": 1,
            "title": "Baby Cloths",
            "href": '/'
          },
          {
            "id": 2,
            "title": "Baby Gear",
            "href": '/'
          },
          {
            "id": 3,
            "title": "Baby Toddler",
            "href": '/'
          },
          {
            "id": 4,
            "title": "Baby Toys",
            "href": '/'
          }
        ]
      }
    ]
  },
  {
    "id": 6,
    "title": "Accessories",
    "href": "",
    "products": [
      {
        "id": 1,
        "title": "Featured",
        "image": feature,
        "items": [
          {
            "id": 1,
            "title": "New Arrival",
            "href": '/'
          },
          {
            "id": 2,
            "title": "Best Seller",
            "href": '/'
          },
          {
            "id": 3,
            "title": "The Track Collection",
            "href": '/'
          },
          {
            "id": 4,
            "title": "Trending",
            "href": '/'
          },
        ]
      },
      {
        "id": 2,
        "title": "Apparel",
        "image": apparel,
        "items": [
          {
            "id": 1,
            "title": "Handbag",
            "href": '/'
          },
          {
            "id": 2,
            "title": "Shoes",
            "href": '/'
          },
          {
            "id": 3,
            "title": "Wallets",
            "href": '/'
          }
        ]
      }
    ]
  },
  {
    "id": 7,
    "title": "Fashion",
    "href": "/"
  },
  {
    "id": 8,
    "title": "Fashion",
    "href": "/",

  }
]

const products = [
  {
    "id": 1,
    "title": "Full Sleeve Tshirt",
    "count": 1,
    "price": 150,
    "image": product1
  },
  {
    "id": 2,
    "title": "Comfort Unisex Hoodie Comfort Unisex Hoodie Comfort Unisex Hoodie Comfort Unisex Hoodie",
    "count": 3,
    "price": 150,
    "image": product2
  },
  {
    "id": 3,
    "title": "Stylish Hoodie",
    "count": 2,
    "price": 150,
    "image": product3
  },
  {
    "id": 4,
    "title": "Stylish Hoodie",
    "count": 5,
    "price": 150,
    "image": product4
  },
  {
    "id": 5,
    "title": "Full Sleeve Tshirt",
    "count": 1,
    "price": 150,
    "image": product1
  },
  {
    "id": 6,
    "title": "Full Sleeve Tshirt",
    "count": 1,
    "price": 150,
    "image": product1
  },
  {
    "id": 7,
    "title": "Comfort Unisex Hoodie",
    "count": 3,
    "price": 150,
    "image": product2
  },
  {
    "id": 8,
    "title": "Stylish Hoodie",
    "count": 2,
    "price": 150,
    "image": product3
  },
  {
    "id": 9,
    "title": "Stylish Hoodie",
    "count": 5,
    "price": 150,
    "image": product4
  },
  {
    "id": 10,
    "title": "Full Sleeve Tshirt",
    "count": 1,
    "price": 150,
    "image": product1
  }
]

const Header = () => {
  const [product, setProduct] = useState([...products])
  const [showCategory, setShowCategory] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [innerDrawer, setInnerDrawer] = useState< number | boolean | null >(null);
  const { xlAndUp } = useContext(breakpointContext);

  const closeCategory = () => {
    setShowCategory(false);
    setInnerDrawer(null);
  }

  const closeCart = () => {
    setShowCart(false);
  }
  const decrement = (id:number) => {
    let list = [...product];
    if (list[id].count > 0) list[id].count -= 1;
    setProduct([...list])
  }
  const increment = (id:number) => {
    let list = [...product];
    list[id].count += 1;
    setProduct([...list])
  }

  useEffect(() => {
    if (showCart) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'scroll';
    }
  }, [showCart])

  useEffect(() => {
    if (xlAndUp && showCategory) {
      setShowCategory(false)
    }
  }, [xlAndUp])

  return (
    <div className="header_container">
      <Container Class="header bg-light_gray" py={false}>
        <Navbar className="flex-wrap flex-sm-nowrap">
          <div className=" flex flex-between align_items-center w-100 w-sm-auto logo_with_search">
            <Navbar.Brand href='/' logo={logo} />
            <AiOutlineSearch className='block none-sm pointer logo_search' />
          </div>
          <Navbar.Links className="flex-1 gap-10 gap-sm-20 gap-md-50 flex-between">
            <div className="flex items-center flex-1 gap-20 gap-md-50 links">
              <div className="relative pointer category">
                <span className='flex-middle gap-10  category_title ' onClick={() => setShowCategory(true)}>
                  <span className='none block-sm'>Category</span> <RxHamburgerMenu className='icon' />
                </span>
                <ul className="absolute dropdown_items none block-xl">
                  {dropDownItems.map((menu, ind) => (
                    <li key={ind} className="">
                      <p className='flex flex-between items-center dropdown_link'>{menu.title}{menu.products && <RiArrowDownSLine className='icon' />}</p>
                      {menu.products && (
                        <div className="absolute flex gap-50 department_menu">
                          {menu.products.map(prod => (
                            <div className="department_submenu" key={prod.id}>
                              <h5 className="sm_title">{prod.title}</h5>
                              <div className="mt-2 image_holder">
                                <Image src={prod.image} alt="" />
                              </div>
                              <ul className="mt-3 submenu_items">
                                {prod.items.map((item) => (
                                  <li key={item.id} className="mt-1">
                                    <Link className='text-500' href={item.href}>{item.title}</Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 relative search none block-sm">
                <AiOutlineSearch className='absolute icon' />
                <input type="text" placeholder='What you are looking for...' />
              </div>
            </div>
            <div className="flex-middle gap-20 nav_buttons" >
              <Navbar.Button className="flex-middle whitelist_btn icon">
                <AiOutlineHeart />
              </Navbar.Button>
              <Navbar.Button className="flex-middle relative cart_btn icon" onClick={() => setShowCart(true)}>
                <BsCart2 />
                <span className='absolute rounded flex-middle'>2</span>
              </Navbar.Button>
              <Navbar.Button className="flex-middle primary-btn radius-1 sign_up">
                Sign Up
              </Navbar.Button>
            </div>
          </Navbar.Links>
        </Navbar>
      </Container >
      <Drawer isActive={showCategory} align="left" className="category_drawer">
        <Drawer.Content className=''>
          <Drawer.Toggle onClick={closeCategory} />
          <ul className="drawer_nav_links">
            {dropDownItems.map(({ id, title, href, products }) => (
              <li key={id}>
                {href ?
                  <Link href={href} className='drawer_nav_link'>{title}</Link>
                  :
                  <p className='flex items-center flex-between a drawer_nav_link' onClick={() => setInnerDrawer(id)}>
                    {title} <ImArrowRight2 className='icon' />
                  </p>
                }
                {products && (
                  <Drawer.Inner Class='' activeNumber={innerDrawer} id={id} onArrowClick={() => setInnerDrawer(false)} >
                    {products.map(product => {
                      return (
                        <ul className="drawer_dropdown_links" key={product.id}>
                          {product.items.map(item => (
                            <li key={item.id}>
                              <Link href={item.href} className='drawer_dropdown_link'>{item.title}</Link>
                            </li>
                          ))}
                        </ul>
                      )
                    })}
                  </Drawer.Inner>
                )}
              </li>
            ))}
          </ul>
        </Drawer.Content>
      </Drawer>
      <Drawer isActive={showCart} align="right" className="cart_drawer">
        <Drawer.Content className=' cart_content'>
          <Drawer.Toggle onClick={closeCart} />
          <div className="relative">
            <h4 className="pl-3 sm_title">Cart <span>(5)</span></h4>
            <ul className="grid gap-30 cart_list">
              {product.map(({ id, title, price, count, image }, ind) => (
                <li className="grid gap-20 pb-4 cart_item" key={id}>
                  <div className="relative image_holder">
                    <Image src={image} alt="" />
                    <div className="absolute flex-middle pointer delete">
                      <RxCross2 />
                    </div>
                  </div>
                  <div className="w-100 content">
                    <p className="title_des word-dots cart_title">{title}</p>
                    <div className="flex flex-between flex-wrap gap-20 items-center mt-2 amount">
                      <Count increment={() => increment(ind)} decrement={() => decrement(ind)} count={count} />
                      <h6 className="sm_title">${price}</h6>
                    </div>
                  </div>
                </li>
              ))}
              <li className="sticky cart_footer">
                <div className="flex flex-between sub_total">
                  <h5 className="sm_title">subtotal</h5>
                  <h5 className="sm_title">$570</h5>
                </div>
                <div className="flex gap-20 flex-between mt-1">
                  <Link href='/' className='btn text-center'>Check out</Link>
                  <Link href='/' className='btn text-center'>View cart</Link>
                </div>
              </li>
            </ul>

          </div>
        </Drawer.Content>
      </Drawer>
    </div >

  )
}

export default Header