import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white px-4 py-10">
      <div className="w-full max-w-[1000px] rounded-xl p-8 shadow-2xl">
        <Hero />
        <div className="my-8 border-t border-gray-700" />
        <About />
        <div className="my-8 border-t border-gray-700" />
        <Projects />
        <div className="my-8 border-t border-gray-700" />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
