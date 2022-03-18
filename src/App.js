import './App.css';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';

function App() {
  return (
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
      <Route path="/">
        <Login />
      </Route>
    </Switch>
  );
}

export default App;
