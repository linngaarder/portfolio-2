import Navbar from "./layout/Navbar";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import { Footer } from "./layout/Footer";
import About from "./sections/About";

function App() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen overflow-x-hidden">
        <main>
          <Projects />
          <About />
          <Contact />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default App;
