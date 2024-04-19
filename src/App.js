import "./App.css";
import AboutMe from "./Components/Pages/AboutMe";
import Hero from "./Components/Pages/Hero";
import SocialBar from "./Components/Pages/SocialBar";
import Header from "./Components/Shared/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Services from "./Components/Pages/Services";
import Projects from "./Components/Pages/Projects/Projects";
import Contact from "./Components/Pages/Contact";
import Footer from "./Components/Shared/Footer";
import Experience from "./Components/Pages/Experience";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="max-w-[1440px] mx-auto">
      <Header></Header>
      <div className="flex">
        <SocialBar></SocialBar>
        <Hero></Hero>
      </div>
      <AboutMe></AboutMe>
      <Services></Services>
      <Experience></Experience>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
