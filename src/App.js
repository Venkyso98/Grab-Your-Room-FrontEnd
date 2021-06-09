import "./App.css";
import Home from "./components/Home/Home";
import SearchRoom from "./components/Search/SearchRoom";
import About from "./components/About.jsx";
import { Route, Switch } from "react-router";
import AllRooms from "./components/Rooms/AllRooms/AllRooms";
import RoomDetails from "./components/Rooms/RoomDetails/RoomDetails";
import RoomReceipt from "./components/Rooms/Receipt/RoomReceipt";
import CssBaseline from '@material-ui/core/CssBaseline';
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/search-room" component={SearchRoom} exact />

        {/* custom props in route */}
        {/* <Route path="/search" render={(props) => (<SearchRoom onClickData={handleOnClick} {...props} />)} exact />
        {/* <Route path="/about" render={(props) => (<About onClickResponseData={data} {...props} />)} exact /> */}
        <Route path="/rooms-listing" component={AllRooms} exact />
        <Route path="/about" component={About} exact />
        <Route path="/room-details/:id" component={RoomDetails} exact></Route>
        <Route path="/room-receipt" component={RoomReceipt} exact></Route>
      </Switch>
      {/* <CssBaseline /> */}
    </div>
  );
}

export default App;
