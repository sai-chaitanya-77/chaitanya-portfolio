import './App.css'
import Navbar from './components/Navbar'
import About from './sections/About';
import Hero from './sections/Hero'

function App() {

  return (
    <div className='bg-gray-950 text-white'>
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}

export default App
