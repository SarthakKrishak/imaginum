import Hero from "./components/Hero";
import Herobg from "./components/Herobg";
import About from "./components/About";
import Projects from "./components/Projects";
import Expertise from "./components/Expertise";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Team from "./components/Team";

const App = () => {
  return (
    <div className="min-h-screen">
      <Herobg />
      <Hero />
      <About />
      <Projects />
      <Expertise />
      <Team/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;
