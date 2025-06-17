import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4 border-b bg-[#F7F4ED] h-20 sm:h-28 lg:h-30 border-gray-200">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Medium</h1>
      
      <div className="space-x-2 sm:space-x-3 lg:space-x-4 text-sm sm:text-base lg:text-lg">
        <Link to="/" className="text-gray-700 hover:underline">Home</Link>
        <Link to="/about" className="text-gray-700 hover:underline">Our Story</Link>
        <Link to="/Membership" className="text-gray-700 hover:underline">Membership</Link>
        <Link to="/login" className="text-gray-700 hover:underline">Sign in</Link>
        <Link to="/write" className="text-gray-700 hover:underline">Write</Link>
        <button className="bg-black text-white px-3 sm:px-4 py-1 rounded-full">Get started</button>
      </div>
    </nav>
  );
};

export default Navbar;
