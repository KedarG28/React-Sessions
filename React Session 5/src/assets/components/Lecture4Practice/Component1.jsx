import React, { useEffect, useState, createContext } from "react";
import axios from "axios";

const menuCard = createContext();
const Component1 = ({ children }) => {
  const [menuData, setMenuData] = useState(null);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/carts")
      .then((response) => {
        setMenuData(response);
      })
      .catch((error) => {
        console.log("Error occurred ! ", error);
      });
  }, []);

  return (
    <>
      <menuCard.Provider value={menuCard}>{children}</menuCard.Provider>
    </>
  );
};

export default Component1;
export { menuCard };
