import { createContext, useReducer } from "react";
import { initialState } from "../../Utility/reducer";

export const DataContext = createContext();
// export const useColor = () => {
//   return useContext(DataContext);
// };
export const DataProvider = ({ children, reducer, initialState }) => {
  //   const [color, setColor] = useState("light");
  //   const colorToggler = () => {
  //     setColor((pre) => (pre === "light" ? "dark" : "light"));
  //   };

  return (
    <DataContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </DataContext.Provider>
  );
};
