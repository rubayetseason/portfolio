import './App.css';
import Hero from './Components/Pages/Hero';
import SocialBar from './Components/Pages/SocialBar';
import Header from './Components/Shared/Header';

function App() {
  return (
    <div className="App max-w-[1440px] mx-auto">
      <Header></Header>
    <div className='flex'>
    <SocialBar></SocialBar>
      <Hero></Hero>
    </div>
    </div>
  );
}

export default App;
