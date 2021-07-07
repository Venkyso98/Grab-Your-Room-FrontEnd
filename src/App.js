import "./App.css";
import Home from "./components/Home/Home";
import SearchRoom from "./components/Search/SearchRoom";
import About from "./components/About.jsx";
import { Route, Switch } from "react-router";
import AllRooms from "./components/Rooms/AllRooms/AllRooms";
import RoomDetails from "./components/Rooms/RoomDetails/RoomDetails";
import RoomReceipt from "./components/Rooms/Receipt/RoomReceipt";
import CssBaseline from "@material-ui/core/CssBaseline";
import Navbar from "./components/Navbar/Navbar";
import DataPersistContext from "./Context/StateContext";
import { useEffect, useState } from "react";
import { getSingleUserData } from "./Services/useAxios";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  checkIn: new Date(),
  checkOut: new Date(),
};

function App() {
  const [usersData, setUsersData] = useState(initialValues);
  const [email, setEmail] = useState("");
  const getDataofUser = JSON.parse(localStorage.getItem("userId"));

  // In case of global Refresh i.e browser refresh to persists username on the page receipt of the room
  useEffect(() => {
    (async () => {
      try {
        const response = await getSingleUserData(getDataofUser);
        console.log("Response Get in App js:", response);
        setUsersData(response.data);
        // setEmail(response.data.email);
      } catch (error) {
        console.log("Error:", error);
      }
    })();
  }, []);

  console.log("In App js");

  return (
    <div>
      {/* <Navbar /> */}

      {/* Context Api implementation */}
      <DataPersistContext.Provider
        value={{
          usersDataValue: [usersData, setUsersData],
          usersEmail: [email, setEmail],
        }}
      >
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/search-room" component={SearchRoom} exact />
          <Route path="/rooms-listing" component={AllRooms} exact />
          <Route path="/about" component={About} exact />
          <Route path="/room-details/:id" component={RoomDetails} exact></Route>
          <Route path="/room-receipt" component={RoomReceipt} exact></Route>
        </Switch>
      </DataPersistContext.Provider>
    </div>
  );
}

export default App;
