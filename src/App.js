import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Navbar } from './components/Navbar';
import { PostsHomePage } from './components/pages/PostsHomePage';
import { ProfilePage } from './components/pages/ProfilePage';
import { LoginPage } from './components/pages/LoginPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <PostsHomePage />
        </Route>
        <Route path="/me">
           <ProfilePage />
        </Route>
        <Route path="/post/:id">
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;