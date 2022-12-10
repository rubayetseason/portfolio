import "./App.css";
import AboutMe from "./Components/Pages/AboutMe";
import Hero from "./Components/Pages/Hero";
import SocialBar from "./Components/Pages/SocialBar";
import Header from "./Components/Shared/Header";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="App max-w-[1440px] mx-auto">
      <Header></Header>
      <div className="flex">
          <SocialBar></SocialBar>
        <Hero></Hero>
      </div>
      <AboutMe></AboutMe>
    </div>
  );
}

export default App;
