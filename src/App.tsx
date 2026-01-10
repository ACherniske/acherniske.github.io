import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Featured from './components/Featured';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#1a1a1a] min-h-screen">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Featured />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
