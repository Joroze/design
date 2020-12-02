import './App.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSearch, faUser, faShoppingBag } from '@fortawesome/free-solid-svg-icons'

import Home from 'pages/Home/Home';


function App() {

  return (
    <div className="component-app">
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
                <a href='#'><FontAwesomeIcon size='lg' icon={faBars} /></a>
              </li>
              <li className='mobile-visible'>
                <a href='#'><FontAwesomeIcon size='lg' icon={faSearch} /></a>
              </li>
            </ul>
          </nav>
          <h2 className='title'>
            Sculpture
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
                <a href='#'><FontAwesomeIcon size='lg' icon={faUser} /></a>
              </li>
              <li className='mobile-visible'>
                <a href='#'><a href='#'><FontAwesomeIcon size='lg' icon={faShoppingBag} /> (0)</a></a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div className='page-container'>
        <Home />
      </div>
    </div>
  );
}

export default App;
