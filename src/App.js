import './App.scss';

import { useState } from 'react'
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useMediaQuery } from 'react-responsive'
import { faBars, faSearch, faUser, faShoppingBag } from '@fortawesome/free-solid-svg-icons'

import Home from 'pages/Home/Home';
import Product from 'pages/Product/Product';
import Button from 'components/Button/Button';

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
              <li className='desktop-visible'>
                <a href='#'>Products</a>
              </li>
              <li className='desktop-visible'>
                <a href='#'>Sale</a>
              </li>
              <li className='desktop-visible'>
                <a href='#'>Search</a>
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
                <a href='#'>Wishlist</a>
              </li>
              <li className='desktop-visible'>
                <a href='#'>Account</a>
              </li>
              <li className='desktop-visible'>
                <a href='#'>Shopping Bag (0)</a>
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
  );
}

export default App;
