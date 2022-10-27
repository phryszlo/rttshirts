import './App.css';
import './style.css';
import { useState, useEffect } from 'react';
import { Routes, Route, } from "react-router-dom";
import { getUser } from './utilities/users-service'
import NavBar from './components/NavBar';
import Navbar from './components/NB';
import AuthPage from "./pages/AuthPage";
import HomePage from './pages/HomePage';
import HomePage0 from './components/HomePage0';
import HomePageK from './components/HPK';
import CartPage from './pages/CartPage';
import ProductsPage from './pages/ProductsPage';
import tShirts from './data/data';

function App() {
  const [user, setUser] = useState(getUser());
  const [googleUser, setGoogleUser] = useState({});
  const [cartItems, setCartItems] = useState([]);
  const {products} = tShirts;

  // this method adapted from Terrell Owens's solution at:
  // https://codesandbox.io/s/cart-forked-ejm0md?file=/src/App.js
  function addToCart(id) {
    console.log(`add to cart ${id}`);

    // locate the product id in the products and get that product object
    const product = products.find((x) => x.id === parseInt(id));

    // check if the cart already contains this item
    const productInCart = cartItems.find((x) => x.id === parseInt(id));

    // if cart has this item, just increment the qty on that item,
    // else, add the item and a new qty prop set to 1.

    if (productInCart) {
      console.log(`cart already has this product. increment qty.`)
      setCartItems(
        cartItems.map((x) =>
          x.id === productInCart.id ? { ...productInCart, qty: productInCart.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  }

  const Remove = (id) => {
    console.log(`remove from cart ${id}`);

    // check if the cart already contains this item
    const productInCart = cartItems.find((x) => x.id === parseInt(id));

    // if somehow we got here and this product is not in the cart, cancel.
    if (!productInCart) return;

    // if cart has more than one of this item, decrement the qty on that item,
    // otherwise, remove the one item.
    if (productInCart.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== id))
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === productInCart.id ? { ...productInCart, qty: productInCart.qty - 1 } : x
        )
      );
    }
  };

  // this fn was moved up here so it can be passed to NavBar && AuthPage seperately
  function handleSignOut(e) {
    setGoogleUser({});
    document.getElementById('signInDiv').hidden = false;
  }

  useEffect(() => {
    try {
      console.log(`user state mod: ${JSON.stringify(user)}`);
    } catch (err) {
      console.log(`app useeffect err: ${err}`)
    }
  },[user])

  return (
    <div className="App">

      <NavBar
        handleSignOut={handleSignOut}
        googleUser={googleUser}
        user={user}
        setUser={setUser}
      />
      {user || (Object.keys(googleUser).length !== 0) ?
        <div className="content-shell">
          <Routes>
            {/* <Route path="/" element={<HomePage addToCart={addToCart} />} /> */}
            <Route path="/" element={<HomePage addToCart={addToCart} />} />
            <Route path="/h0" element={<HomePage0 addToCart={addToCart} />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/cart" element={<CartPage cartItems={cartItems} products={products} />} />
          </Routes>
        </div>
        :
        <AuthPage
          setUser={setUser}
          setGoogleUser={setGoogleUser}
          handleSignOut={handleSignOut}
        />
      }
    </div>
  );
}

export default App;
