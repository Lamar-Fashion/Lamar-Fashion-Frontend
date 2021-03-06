/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { React, useState, useEffect } from 'react';
import '../../styles/header-styles/Header.css';
import logo from '../../images/header/lamar-logo-small.png';
import { BsCartFill, BsFillHeartFill, BsPersonCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';
function Header() {
  const [showVerticalNav, setshowVerticalNav] = useState(false);
  const [showDropHome, setShowDropHome] = useState(false);
  const [showDropAbay, setShowDropAbay] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [dropDownA, setDropDownA] = useState(false);
  const [y, setY] = useState(0);
  // const [favNam,setFavNam]=useState(0)
  const [favArray, setFavArray] = useState([]);
  const [cartNam, setCartNam] = useState(0);
  const [cartArray, setCartArray] = useState([]);
  useEffect(() => {
    // setCartArray(JSON.parse(window.localStorage.getItem('cart')));
    // setFavArray(JSON.parse(window.localStorage.getItem('fav')));
    // favArray&& setFavNam(favArray.length)
    // console.log('hello from local storage');
    // cartArray&& setCartNam(cartArray.length)
  }, [JSON.parse(window.localStorage.getItem('fav'))]);

  function scrollHandler() {
    setY(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler, true);
    setFavArray(JSON.parse(window.localStorage.getItem('fav')));
  }, []);

  return (
    <>
      <section className={y > 0 ? 'header header-scroll' : 'header'}>
        {showVerticalNav && (
          <>
            <div
              className='close-vertical'
              onClick={() => {
                setshowVerticalNav(false);
              }}
            ></div>
            <div className='vertical-nav-container'>
              <ul className='main-nav-phone'>
                <li>
                  <Link
                    to='/'
                    onClick={() => {
                      window.scrollTo({
                        left: 0,
                        top: 0,
                        behavior: 'smooth',
                      });
                    }}
                  >
                    <a>Home</a>
                  </Link>
                  <i
                    className={dropDown ? 'fas fa-angle-up' : 'fas fa-angle-down'}
                    onClick={() => {
                      setShowDropHome(!showDropHome);
                      setDropDown(!dropDown);
                    }}
                  ></i>
                  <ul className={showDropHome ? 'drop-ul-phone drop-ul-phone-scroll' : 'drop-ul-phone'}>
                    <li>
                      <a href='#brands'>Brands</a>
                    </li>
                    <li>
                      <a href='#collection'>Collection</a>
                    </li>
                    <li>
                      <a href='#feedback'>Feedback</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link
                    to='/Abaya'
                    onClick={() => {
                      window.scrollTo({
                        left: 0,
                        top: 0,
                        behavior: 'smooth',
                      });
                    }}
                  >
                    <a>Abaya</a>
                  </Link>
                  <i
                    className={dropDownA ? 'fas fa-angle-up' : 'fas fa-angle-down'}
                    onClick={() => {
                      setShowDropAbay(!showDropAbay);
                      setDropDownA(!dropDownA);
                    }}
                  ></i>
                  <ul className={showDropAbay ? 'drop-ul-phone drop-ul-phone-scroll' : 'drop-ul-phone'}>
                    <li>
                      <a href='#lamar'>lamar</a>
                    </li>
                    <li>
                      <a href='#mortaha'>mortaha</a>
                    </li>
                    <li>
                      <a href='#neo'>neo</a>
                    </li>
                    <li>
                      <a href='#shera'>shera</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href='#shalat'>Shalat</a>
                </li>
              </ul>
            </div>
          </>
        )}
        <div className={y > 0 ? 'lamar-container lamar-container-scroll ' : 'lamar-container'}>
          <ul className={y > 0 ? 'main-nav main-nav-scroll ' : 'main-nav'}>
            <li>
              <Link
                to='/'
                onClick={() => {
                  window.scrollTo({
                    left: 0,
                    top: 0,
                    behavior: 'smooth',
                  });
                }}
              >
                <a>
                  Home<i class='fas fa-angle-down'></i>
                </a>
              </Link>
              <ul className={y > 0 ? 'drop-ul-home-scroll' : 'drop-ul-home'}>
                <li>
                  <a href='#brands'>Brands</a>
                </li>
                <li>
                  <a href='#collection'>Collection</a>
                </li>
                <li>
                  <a href='#feedback'>Feedback</a>
                </li>
              </ul>
            </li>
            <li>
              <Link
                to='/Abaya'
                onClick={() => {
                  window.scrollTo({
                    left: 0,
                    top: 0,
                    behavior: 'smooth',
                  });
                }}
              >
                <a>
                  Abaya<i class='fas fa-angle-down'></i>
                </a>
              </Link>
              <ul className={y > 0 ? 'drop-ul-home-scroll' : 'drop-ul-home'}>
                <li>
                  <a href='#lamar'>lamar</a>
                </li>
                <li>
                  <a href='#mortaha'>mortaha</a>
                </li>
                <li>
                  <a href='#neo'>neo</a>
                </li>
                <li>
                  <a href='#shera'>shera</a>
                </li>
              </ul>
            </li>
            <li>
              <Link to='/Shalat'>
                <a href='#shalat'>Shalat</a>
              </Link>
            </li>
          </ul>

          <div className={y > 0 ? 'image image-scroll ' : 'image'}>
            <Link
              to='/'
              onClick={() => {
                window.scrollTo({
                  left: 0,
                  top: 0,
                  behavior: 'smooth',
                });
              }}
            >
              <img src={logo} alt='logo' className='logo' />
            </Link>
          </div>
          <section className={y > 0 ? 'rightContainer rightContainer-scroll ' : 'rightContainer'}>
            <div className='searchContainer'>
              <input type='text' name='search' placeholder='Search...' className='input' />

              <a href='#' className='btn'>
                <i className='fas fa-search'></i>
              </a>
            </div>
            <ul className='right-nav'>
              <li>
                <Link
                  to='/SignIn'
                  onClick={() => {
                    window.scrollTo({
                      left: 0,
                      top: 0,
                      behavior: 'smooth',
                    });
                  }}
                >
                  <a>
                    <BsPersonCircle className='header-icons profile' />
                  </a>
                </Link>
              </li>
              <li>
                <Link
                  to='/Profile'
                  onClick={() => {
                    window.scrollTo({
                      left: 0,
                      top: 0,
                      behavior: 'smooth',
                    });
                  }}
                >
                  <a>
                    <BsFillHeartFill className='header-icons fav' />

                    <strong className='number'>{favArray?.length ? favArray.length : 0}</strong>
                  </a>
                </Link>
              </li>
              <li>
                <Link
                  to='/Cart'
                  onClick={() => {
                    window.scrollTo({
                      left: 0,
                      top: 0,
                      behavior: 'smooth',
                    });
                  }}
                >
                  <a>
                    <BsCartFill className='header-icons cart' />

                    <strong className='number'>{cartNam}</strong>
                  </a>
                </Link>
              </li>
            </ul>
          </section>
          <div
            className={showVerticalNav ? 'three-dashs active' : 'three-dashs'}
            onClick={() => {
              setshowVerticalNav(!showVerticalNav);
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
