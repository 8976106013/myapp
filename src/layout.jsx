import React, {useContext,useEffect} from "react";
import { getLocalStorage } from "./commonFunctions/getLocalStorage";
import { useNavigate } from "react-router";
import UserContext from "./context/UserContext";
 const Layout = ({ children }) => {
 // const Layout = () => {
  const context = useContext(UserContext);
   const userData = getLocalStorage();
   const navigate = useNavigate();

  useEffect(() => {
    if (!context.checkLogin) {
      if (!userData.email || !userData.password) {
        navigate("/login");
        localStorage.clear();
      } else {
        context.setCheckLogin(true);
      }
    }
  }, []);

  return <>{children}</>;
};

export default Layout;
