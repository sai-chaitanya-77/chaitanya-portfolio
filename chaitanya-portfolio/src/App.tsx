import './App.css'
import Navbar from './components/Navbar'
import About from './sections/About';
import Hero from './sections/Hero'
import Projects from './sections/Projects';
import Skills from './sections/Skills';

function App() {

  return (
    <div className='bg-gray-950 text-white'>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

export default App
