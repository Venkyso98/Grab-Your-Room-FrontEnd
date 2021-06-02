import "./App.css";
import Home from "./components/Home/Home";
import SearchRoom from "./components/Search/SearchRoom";
import About from "./components/About.jsx";
import { Route, Switch } from "react-router";
import AllRooms from "./components/AllRooms/AllRooms";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/search" component={SearchRoom} exact />

        {/* custom props in route */}
        {/* <Route path="/search" render={(props) => (<SearchRoom onClickData={handleOnClick} {...props} />)} exact /> */}
        {/* <Route path="/about" render={(props) => (<About onClickResponseData={data} {...props} />)} exact /> */}
        <Route path="/allrooms" component={AllRooms} exact />
        <Route path="/about" component={About} exact />
      </Switch>
    </div>
  );
}

export default App;
