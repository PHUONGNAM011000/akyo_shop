import './App.css';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import { Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Product from './Pages/Product/Product';
import Demo from './demo';
import Checkout from './Pages/Payment/Checkout';
import NavBar from './Components/NavBar/NavBar';
import { useSelector } from 'react-redux';
import Cart from './Components/Cart/Cart';

function App() {
  const openCart = useSelector((state) => state.cart.openCart);

  return (
    <>
      {openCart && <Cart />}
      <NavBar />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/product/:productId">
          <Product />
        </Route>
        <Route path="/demo">
          <Demo />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
