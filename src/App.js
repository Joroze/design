import './App.scss';

import Home from 'pages/Home/Home';

function App() {
  return (
    <div className="component-app">
      <header className="app-nav">
        <nav>
          <ul>
            <li>
              <a href='#'>Products</a>
            </li>
            <li>
              <a href='#'>Sale</a>
            </li>
            <li>
              <a href='#'>Search</a>
            </li>
          </ul>
        </nav>
        <h2 className='title'>
          Sculpture
                </h2>
        <nav>
          <ul>
            <li>
              <a href='#'>Wishlist</a>
            </li>
            <li>
              <a href='#'>Account</a>
            </li>
            <li>
              <a href='#'>Shopping Bag (0)</a>
            </li>
          </ul>
        </nav>
      </header>
      <Home />
    </div>
  );
}

export default App;
