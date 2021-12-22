import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Navbar } from './components/Navbar';
import { PostsHomePage } from './components/pages/PostsHomePage';
import { ShoppingCartPage } from './components/pages/ShoppingCartPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <PostsHomePage />
        </Route>
        <Route path="/cart">
           <ShoppingCartPage />
        </Route>
        <Route path="/post/:id">
          <div>Individual Post Details</div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;