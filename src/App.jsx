import './styles/global.css';
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Team from './pages/Team';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Team />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
