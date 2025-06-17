import bgImage from '../assets/1.jpeg'; // update path if different

const Home = () => {
  return (
    <main
      className="min-h-screen flex items-center justify-center px-4 text-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="p-8 rounded-lg  max-w-2xl">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
          Human<br />stories & ideas
        </h2>
        <p className="text-gray-700 text-base sm:text-lg mb-6">
          A place to read, write, and deepen your understanding
        </p>
        <button className="px-6 py-3 bg-black text-white rounded-full text-sm sm:text-base hover:bg-gray-900 transition">
          Start reading
        </button>
      </div>
    </main>
  );
};

export default Home;
