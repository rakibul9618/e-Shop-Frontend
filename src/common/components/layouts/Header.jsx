import Container from './Container'
import Navbar from './navbar/Navbar'
import Link from 'next/link';

// logo
import logo from "@/images/logo.png"

// images
import feature1 from '@/images/product_feature1.png'
import feature2 from '@/images/product_feature2.png'
import feature3 from '@/images/product_feature3.png'
import feature4 from '@/images/product_feature4.png'

import feature from '@/images/feature.png'
import apparel from '@/images/apparel.png'


// icons
import { BsCart2 } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineSearch } from 'react-icons/ai';
import Image from 'next/image';

const dropDownItems = [
  {
    "id": 1,
    "title": "Trending this week",
    "href": "",
    "icon": ""
  },
  {
    "id": 2,
    "title": "New Arrivals",
    "href": "",
    "icon": ""
  },
  {
    "id": 1,
    "title": "Men's Fashion",
    "icon": "",
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
            "id": 3,
            "title": "Trending",
            "href": '/'
          },
        ]
      },
      {
        "id": 1,
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
    "id": 3,
    "title": "Women's Fashion",
    "href": false,
    "icon": "",
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
            "id": 3,
            "title": "Trending",
            "href": '/'
          },
        ]
      },
      {
        "id": 1,
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
    "id": 4,
    "title": "Baby Product",
    "href": false,
    "icon": "",
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
            "id": 3,
            "title": "Trending",
            "href": '/'
          },
        ]
      },
      {
        "id": 1,
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
    "id": 5,
    "title": "Accessories",
    "href": false,
    "icon": "",
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
            "id": 3,
            "title": "Trending",
            "href": '/'
          },
        ]
      },
      {
        "id": 1,
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
    "id": 6,
    "title": "Fashion",
    "href": "",
    "icon": ""
  },
  {
    "id": 7,
    "title": "Fashion",
    "href": "",
    "icon": ""
  }
]

const Header = () => {
  return (
    <Container Class="header bg-light_gray" py={false}>
      <Navbar className="flex-wrap flex-sm-nowrap">
        <div className=" flex justify_content-between align_items-center w-100 w-sm-auto logo_with_search">
          <Navbar.Brand href='/' logo={logo} />
          <AiOutlineSearch className='block none-sm pointer logo_search' />
        </div>
        <Navbar.Links className="flex-1 gap-10 gap-sm-50 justify_content-between">
          <div className="flex align_items-center flex-1 gap-50 links">
            <div className="relative flex-center gap-10 pointer category">
              Category <RxHamburgerMenu className='icon' />
              <ul className="absolute dropdown_items none block-xl">
                {dropDownItems.map((menu, ind) => (
                  <li key={ind} className="">
                    <p className='dropdown_link'>{menu.title}</p>
                    {menu.products && (
                      <div className="absolute flex gap-50 department_menu">
                        {menu.products.map(prod => (
                          <div className="department_submenu" key={prod.id}>
                            <h5 className="sm_title">{prod.title}</h5>
                            <div className="mt-2 image_holder">
                              <Image src={prod.image} alt="" />
                            </div>
                            <ul class="mt-3 submenu_items">
                              {prod.items.map(item => (
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
          <div className="flex-center gap-20 nav_buttons">
            <Navbar.Button className="flex-center whitelist_btn icon">
              <AiOutlineHeart />
            </Navbar.Button>
            <Navbar.Button className="flex-center relative cart_btn icon">
              <BsCart2 />
              <span className='absolute rounded flex-center'>2</span>
            </Navbar.Button>
            <Navbar.Button className="flex-center sign_up">
              Sign Up
            </Navbar.Button>
          </div>
        </Navbar.Links>

      </Navbar>
    </Container >
  )
}

export default Header