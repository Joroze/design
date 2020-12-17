import './App.scss';

import React, { useState, useEffect, useContext } from 'react'
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useMediaQuery } from 'react-responsive'
import { faBars, faSlash, faSearch, faUser, faShoppingBag } from '@fortawesome/free-solid-svg-icons'

import playdohImg from 'assets/images/playdoh.jpg'
import earthImg from 'assets/images/earth.jpg'
import sunImg from 'assets/images/sun.jpg'
import snowmanImg from 'assets/images/snowman.jpg'
import snowmanImg2 from 'assets/images/snowman2.jpg'
import patrickImg from 'assets/images/patrick.jpg'
import burgerImg from 'assets/images/burger.jpg'
import burgerImg2 from 'assets/images/burger2.jpg'
import slimeImg from 'assets/images/slime.jpg'
import slimeImg2 from 'assets/images/slime2.jpg'
import cubeImg from 'assets/images/cubeImg.jpg'
import cubeImg2 from 'assets/images/cubeImg2.jpg'

import Home from 'pages/Home/Home';
import Product from 'pages/Product/Product';
import Button from 'components/Button/Button';

import { ProductContext } from 'components/ProductContextProvider'

const ID_TO_IMAGE_MAP = {
  1: [burgerImg, burgerImg2],
  2: [sunImg],
  3: [earthImg],
  4: [snowmanImg, snowmanImg2],
  5: [patrickImg],
  6: [slimeImg, slimeImg2],
  7: [playdohImg], // example
  8: [cubeImg, cubeImg2]
}

function App() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [originalProducts, setOriginalProducts] = useState([]);

  const [productsLoading, setProductsLoading] = useState(true);
  const history = useHistory();
  const { setProducts } = useContext(ProductContext);

  useEffect(() => {
    // Fetch products as soon as the page loads
    async function fetchProducts() {
      try {
        const products = await fetch("https://api.joroze.com/products").then(res => res.json());

        const productsWithImages = products
          .sort(((a, b) => a.id - b.id))
          .map(function (product) {
            return {
              ...product,
              imgSrc: ID_TO_IMAGE_MAP[product.id]
            }
          });

        setOriginalProducts(productsWithImages)
        setProducts(productsWithImages);
      } catch (error) {
        setProducts([])
      }

      setProductsLoading(false);
    }

    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isDesktopView = useMediaQuery({
    query: '(min-width: 1024px)'
  }, undefined, handleMediaQueryChange)

  function handleMediaQueryChange() {
    setOpen(false);
  }

  function handleToggleNavDropdownMenu() {
    setOpen(!open);
  }

  function goToHomePage() {
    setSearchOpen(false);
    history.push('/');
  }

  function handleOnSearchChange(e) {
    const newSearchValue = e.target.value.toLowerCase();
    const products = originalProducts.filter((product) => product.name.toLowerCase().includes(newSearchValue));
    setSearchValue(newSearchValue);
    setProducts(products);
  }

  return (
    <div className={`component-app ${open ? 'open' : ''}`}>
      {open &&
        <div className='app-nav-dropdown'>
          <ul>
            <li>Account</li>
            <li>Contact</li>
            <li>Wishlist</li>
            <li>FAQ</li>
          </ul>
          <div onClick={handleToggleNavDropdownMenu} className='close-menu'>Close</div>
        </div>
      }

      <header className="app-nav">
        <div>
          <nav>
            <ul>
              {isDesktopView
                ? <>
                  <li>
                    <Button onClick={goToHomePage} borderless>Products</Button>
                  </li>
                  <li>
                    <Button disabled borderless>Sale</Button>
                  </li>
                  <li>
                    <Button onClick={() => setSearchOpen(!searchOpen)} borderless>Search</Button>
                    {searchOpen &&
                      <div className='search-menu'>
                        <input autofocus value={searchValue} onChange={handleOnSearchChange} />
                      </div>
                    }
                  </li>
                </>
                : <>
                  <li>
                    <span onClick={handleToggleNavDropdownMenu}><FontAwesomeIcon size='lg' icon={faBars} /></span>
                  </li>
                  <li>
                    <span onClick={() => setSearchOpen(!searchOpen)}><FontAwesomeIcon size='lg' icon={faSearch} /></span>
                    {searchOpen &&
                      <div className='search-menu'>
                        <input autofocus value={searchValue} onChange={handleOnSearchChange} />
                      </div>
                    }
                  </li>
                </>
              }
            </ul>
          </nav>

          <h2 className='title'>
            <Button borderless onClick={goToHomePage}>
              Sculpture
            </Button>
          </h2>

          <nav>
            <ul>
              {isDesktopView
                ? <>
                  <li>
                    <Button disabled borderless>Wishlist</Button>
                  </li>
                  <li>
                    <Button disabled borderless>Account</Button>
                  </li>
                  <li>
                    <Button disabled borderless>Shopping Bag (0)</Button>
                  </li>
                </>
                : <>
                  <li>
                    <span><FontAwesomeIcon color='gray' size='lg' icon={faUser} /></span>
                  </li>
                  <li>
                    <span><FontAwesomeIcon color='gray' size='lg' icon={faShoppingBag} /> (0)</span>
                  </li>
                </>
              }
            </ul>
          </nav>
        </div>
      </header>

      <div className='page-container'>
        {productsLoading
          ? <FontAwesomeIcon icon={faSlash} pulse />
          : (
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/product/:id">
                <Product />
              </Route>
              <Route>
                <Redirect to="/" />
              </Route>
            </Switch>
          )
        }
      </div>
    </div >
  );
}

export default App;
