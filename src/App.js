import './App.scss';

import React, { useState, useEffect, useContext } from 'react'
import { Switch, Route, Redirect, useHistory, useRouteMatch } from 'react-router-dom';

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
import cubeImg from 'assets/images/cube.jpg'
import cubeImg2 from 'assets/images/cube2.jpg'

import Home from 'pages/Home/Home';
import Product from 'pages/Product/Product';
import Button from 'components/Button/Button';
import SearchBar from 'components/SearchBar/SearchBar';

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
  const [products, setProducts] = useState([]);

  const [productsLoading, setProductsLoading] = useState(true);
  const history = useHistory();
  const { products: filteredProducts, setProducts: setFilteredProducts } = useContext(ProductContext);

  const { isExact: isHomePage } = useRouteMatch({
    path: "/",
    strict: true
  });

  const isDevelopmentMode = process.env.NODE_ENV === 'development';
  const mockedProductData = [{ "available": false, "category": [], "price": 0, "description": "", "id": 7, "name": "Example", "color": [] }, { "available": true, "category": [], "price": 5, "description": "Pretty neat, huh?", "id": 8, "name": "Cube", "color": ["black"], "hidden": false }, { "available": true, "category": ["space"], "price": 5, "description": "", "id": 3, "name": "Earth", "color": ["blue", "green", "white"] }, { "available": false, "descripton": "", "category": ["space"], "price": 10, "id": 2, "name": "Sun", "color": ["red", "orange"] }, { "available": true, "category": ["space"], "price": 5, "description": "", "id": 4, "name": "Snowman", "color": ["white"] }, { "available": true, "category": [], "price": 5, "description": "", "id": 6, "name": "Slime", "color": ["purple"], "hidden": false }, { "available": true, "descripton": "", "category": ["food"], "id": 1, "price": 5, "name": "Burger", "color": ["orange"] }, { "available": true, "category": ["tv"], "price": 5, "description": "The best character in Bikini Bottom", "id": 5, "name": "Patrick", "color": ["pink", "green", "purple", "red"] }];

  useEffect(() => {
    // Fetch products as soon as the page loads
    async function fetchProducts() {
      try {
        const products = isDevelopmentMode
          ? mockedProductData
          : await fetch("https://api.joroze.com/products").then(res => res.json());

        const productsWithImages = products
          .sort(((a, b) => a.id - b.id))
          .map(function (product) {
            return {
              ...product,
              imgSrc: ID_TO_IMAGE_MAP[product.id]
            }
          });

        setProducts(productsWithImages)
        setFilteredProducts(productsWithImages);
      } catch (error) {
        setFilteredProducts([])
      }

      setProductsLoading(false);
    }

    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(function () {
    if (!searchValue) {
      setFilteredProducts(products);

      return;
    }

    const sanitizedSearchValue = searchValue.toLowerCase();
    const newFilteredProducts = products.filter((product) => product.name.toLowerCase().includes(sanitizedSearchValue));

    setFilteredProducts(newFilteredProducts);
  }, [products, setFilteredProducts, searchValue])

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
    setSearchValue('');
    history.push('/');
  }

  function handleOnSearchChange(e) {
    setSearchValue(e.target.value);
  }

  function handleSearchOnMouseDown(e) {
    e.preventDefault();
  }

  function handleSearchClick(e) {
    setSearchOpen(!searchOpen)
  }

  function handleOnSearchBlur(e) {
    setSearchOpen(false);
  }

  return (
    <div className={`component-app ${open ? 'open' : ''}`}>
      { open &&
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
                    <Button onClick={goToHomePage} inactive={searchOpen} borderless>Products</Button>
                  </li>
                  <li>
                    <Button disabled inactive={searchOpen} borderless>Sale</Button>
                  </li>
                  {isHomePage &&
                    <li>
                      <Button onClick={handleSearchClick} onMouseDown={handleSearchOnMouseDown} borderless>Search</Button>
                      {searchOpen &&
                        <SearchBar
                          onBlur={handleOnSearchBlur}
                          autoFocus={true}
                          value={searchValue}
                          onChange={handleOnSearchChange}
                        >
                          {searchValue && `${filteredProducts.length} results`}
                        </SearchBar>
                      }
                    </li>
                  }
                </>
                : <>
                  <li>
                    <span onClick={handleToggleNavDropdownMenu}><FontAwesomeIcon size='lg' icon={faBars} /></span>
                  </li>
                  {isHomePage &&
                    <li>
                      <span onClick={handleSearchClick} onMouseDown={handleSearchOnMouseDown}><FontAwesomeIcon size='lg' icon={faSearch} /></span>
                      {searchOpen &&
                        <SearchBar
                          onBlur={handleOnSearchBlur}
                          autoFocus={true}
                          value={searchValue}
                          onChange={handleOnSearchChange}
                        >
                          {searchValue && `${filteredProducts.length} results`}
                        </SearchBar>
                      }
                    </li>
                  }
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
                <Home>
                  {searchValue && <p className='search-criteria'>Search: "{searchValue}"</p>}
                </Home>
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
