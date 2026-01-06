
import { Outlet } from "react-router-dom";
import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";
//Main layout, this has navbar
export const MainLayout = ({ navStatus, setStatus, mode}) => {
  return (
    <>
    <main  className={`min-h-screen transition-all duration-500 ${
      mode 
        ? 'bg-linear-to-b from-gray-900 via-purple-950 to-black text-white' 
        : 'bg-linear-to-b from-indigo-300 via-fuchsia-700 to-pink-300 text-white'
    }`}>
      <Navbar navStatus={navStatus} setStatus={setStatus} />
      <Outlet />
      <Footer/>
</main>
    </>
  );
};
