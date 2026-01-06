
import { Outlet } from "react-router-dom";
import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";
//Main layout, for determining which page has navbar and which has none
export const MainLayout = ({ navStatus, setStatus }) => {
  return (
    <>
      <Navbar navStatus={navStatus} setStatus={setStatus} />
      
      <Outlet />
      <Footer/>

    </>
  );
};
