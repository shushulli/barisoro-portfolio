
import { Outlet } from "react-router-dom";
import { Navbar } from "../Components/Navbar";
//Main layout
export const MainLayout = ({ navStatus, setStatus }) => {
  return (
    <>
      <Navbar navStatus={navStatus} setStatus={setStatus} />
      <Outlet />
    </>
  );
};
