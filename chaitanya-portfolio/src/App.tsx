import './App.css'
import Navbar from './components/Navbar'
import About from './sections/About';
import Hero from './sections/Hero'
import Skills from './sections/Skills';

function App() {

  return (
    <div className='bg-gray-950 text-white'>
      <Navbar />
      <Hero />
      <About />
      <Skills />
    </div>
  );
}

export default App
