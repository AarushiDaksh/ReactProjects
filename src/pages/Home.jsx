import React from "react";
import { useSelector } from "react-redux";

const HomePage = () => {
  const currentUser = useSelector((state) => state.user.currentUser);

  return (
    <div className="min-h-screen font-serif">
      <nav className="flex justify-between items-center px-10 py-5 border-b border-gray-300">
        <h1 className="text-2xl font-bold tracking-tight">Medium</h1>
        <div className="flex gap-6 items-center text-sm font-medium text-gray-700">
          <a href="#" className="hover:underline">Our story</a>
          <a href="#" className="hover:underline">Membership</a>
          <a href="#" className="hover:underline">Write</a>
          <a href="#" className="hover:underline">Sign in</a>
          <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition">
            Get started
          </button>
        </div>
      </nav>

      <main className="px-10 py-20 max-w-4xl mx-auto">
        <h2 className="text-6xl font-bold leading-tight mb-6 text-gray-900">
          Human stories & ideas
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          A place to read, write, and deepen your understanding.
        </p>

        <button className="bg-gray-900 text-white text-lg px-6 py-3 rounded-full hover:bg-gray-800 transition">
          Start reading
        </button>

        
        {currentUser && (
          <div className="mt-10 p-4 border rounded bg-green-50 text-green-700">
            <h2 className="text-lg font-semibold mb-1">Logged in as:</h2>
            <strong>{currentUser.username}</strong> (<em>{currentUser.email}</em>)
          </div>
        )}
      </main>
    </div>
  );
};

export default HomePage;
