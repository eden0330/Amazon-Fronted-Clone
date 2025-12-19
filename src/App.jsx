import { useContext, useEffect, useReducer } from "react";
import "./App.css";

import Routing from "./Routing.jsx";
import { DataContext } from "./components/DataProvider/DataProvider.jsx";
import { Type } from "./Utility/action.type.js";
import auth from "./Utility/Firebase.js";

function App() {
  const [{ user, dispatch }] = useContext(DataContext);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log(authUser);
      }
    });
  }, []);
  return (
    <>
      <Routing />
    </>
  );
}

export default App;
