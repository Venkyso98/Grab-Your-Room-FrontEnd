import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import SearchRoom from './components/Search/SearchRoom';
import About from "./components/About.jsx"
import { Route, Switch } from 'react-router';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/search" component={SearchRoom} exact />
      </Switch>
      {/* <Home /> */}
      {/* <SearchRoom /> */}
    </div>
  );
}

export default App;
