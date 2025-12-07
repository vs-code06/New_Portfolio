import ScrollProgress from './components/ScrollProgress';
import ScrollToTop from './components/ScrollToTop';
import CustomCursor from './components/CustomCursor';
import Header from './components/Header';
import Background from './components/Background';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Experience from './components/Experience/Experience';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-primary selection:text-bg bg-bg text-text transition-colors duration-300">
      <ScrollProgress />
      <ScrollToTop />
      <CustomCursor />
      <Header />
      <Background />
      <main className="relative z-10">
        <Hero />
        <About />
        <Services />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
