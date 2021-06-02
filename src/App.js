import "./App.css";
import Home from "./components/Home/Home";
import SearchRoom from "./components/Search/SearchRoom";
import About from "./components/About.jsx";
import { Route, Switch } from "react-router";
import { useState } from "react";

function App() {
  const [data, setData] = useState("");

  const handleOnClick = (dataValue) => {
    console.log("In handle On Click:",dataValue);
    setData(dataValue);
  }
  return (
    <div>
      <Switch>
        <Route path="/" component={Home} exact />
        {/* <Route path="/search" component={SearchRoom} exact /> */}
        {/* <Route path="/about" exact component={About}  /> */}

        {/* custom props in route */}
        <Route path="/search" render={(props) => (<SearchRoom onClickData={handleOnClick} {...props} />)} exact />
        {/* <Route path="/about" render={(props) => (<About onClickResponseData={data} {...props} />)} exact /> */}
        <Route path="/about/:value" component={About} exact />
    
      </Switch>
      {/* <Home /> */}
      {/* <SearchRoom /> */}
    </div>
  );
}

export default App;
