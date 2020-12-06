import './App.scss';

import React, { useState } from 'react'
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useMediaQuery } from 'react-responsive'
import { faBars, faSearch, faUser, faShoppingBag } from '@fortawesome/free-solid-svg-icons'

import Home from 'pages/Home/Home';
import Product from 'pages/Product/Product';
import Button from 'components/Button/Button';

import playdohImg from 'assets/images/playdoh.jpg'
import earthImg from 'assets/images/earth.jpg'
import sunImg from 'assets/images/sun.jpg'
import snowmanImg from 'assets/images/snowman.jpg'
import snowman2Img from 'assets/images/snowman2.jpg'
import patrickImg from 'assets/images/patrick.jpg'
import burgerImg from 'assets/images/burger.jpg'
import burger2Img from 'assets/images/burger2.jpg'

const defaultProductContextValue = {
  availableItems: [
    {
      id: '1',
      name: 'Burger',
      description: '',
      price: '5',
      imgSrc: [burgerImg, burger2Img],
      category: ['food'],
      color: ['orange']
    },
    {
      id: '2',
      name: 'Sun',
      description: '',
      price: '',
      imgSrc: [sunImg],
      category: ['space'],
      color: ['red', 'orange']
    },
    {
      id: '3',
      name: 'Earth',
      description: '',
      price: '5',
      imgSrc: [earthImg],
      category: ['space'],
      color: ['blue', 'green', 'white']
    },
    {
      id: '4',
      name: 'Snowman',
      description: '',
      price: '',
      imgSrc: [snowmanImg, snowman2Img],
      category: [],
      color: ['white']
    },
    {
      id: '5',
      name: 'Patrick',
      description: 'The best character in Bikini Bottom',
      price: '5',
      imgSrc: [patrickImg],
      category: ['tv'],
      color: ['pink', 'green', 'purple', 'red']
    },
    {
      id: '6',
      name: 'Example',
      description: '',
      price: '',
      imgSrc: [playdohImg],
      category: [],
      color: []
    },
  ]
};

export const ProductContext = React.createContext();

function App() {
  const [open, setOpen] = useState(false);
  const history = useHistory();

  useMediaQuery({
    query: '(min-width: 1024px)'
  }, undefined, handleMediaQueryChange)

  function handleMediaQueryChange() {
    setOpen(false);
  }

  function handleToggleNavDropdownMenu() {
    setOpen(!open);
  }

  return (
    <ProductContext.Provider value={defaultProductContextValue}>
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
                <li className='desktop-visible'>
                  <Button borderless>Products</Button>
                </li>
                <li className='desktop-visible'>
                  <Button borderless>Sale</Button>
                </li>
                <li className='desktop-visible'>
                  <Button borderless>Search</Button>
                </li>
                <li className='mobile-visible'>
                  <span onClick={handleToggleNavDropdownMenu}><FontAwesomeIcon size='lg' icon={faBars} /></span>
                </li>
                <li className='mobile-visible'>
                  <span><FontAwesomeIcon size='lg' icon={faSearch} /></span>
                </li>
              </ul>
            </nav>

            <h2 className='title'>
              <Button borderless onClick={() => history.push('/')}>
                Sculpture
            </Button>
            </h2>

            <nav>
              <ul>
                <li className='desktop-visible'>
                  <Button borderless>Wishlist</Button>
                </li>
                <li className='desktop-visible'>
                  <Button borderless>Account</Button>
                </li>
                <li className='desktop-visible'>
                  <Button borderless>Shopping Bag (0)</Button>
                </li>
                <li className='mobile-visible'>
                  <span><FontAwesomeIcon size='lg' icon={faUser} /></span>
                </li>
                <li className='mobile-visible'>
                  <span><FontAwesomeIcon size='lg' icon={faShoppingBag} /> (0)</span>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <div className='page-container'>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route
              path="/product/:id"
            >
              <Product />
            </Route>
            <Route>
              <Redirect to="/" />
            </Route>
          </Switch>
        </div>
      </div >
    </ProductContext.Provider>
  );
}

export default App;
