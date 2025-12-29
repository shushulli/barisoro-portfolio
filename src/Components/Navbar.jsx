import './Navbar.css';
export const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-6 justify-center">
        <li className="text-white hover:text-gray-300 cursor-pointer font-semibold">Home</li>
        <li className="text-white hover:text-gray-300 cursor-pointer font-semibold">About</li>
        <li className="text-white hover:text-gray-300 cursor-pointer font-semibold">Services</li>
        <li className="text-white hover:text-gray-300 cursor-pointer font-semibold">Contact</li>
      </ul>
    </nav>
  )
};
