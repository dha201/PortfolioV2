import Intro from './components/Intro';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Portfolio from './components/portfolio/Portfolio';
import Timeline from './components/timeline/Timeline';
import Navbar from './components/navbar/Navbar';
import { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const cursorBlurs = document.querySelectorAll('.cursor-blur');
      cursorBlurs.forEach((cursorBlur) => {
        cursorBlur.style.left = `${e.clientX}px`;
        cursorBlur.style.top = `${e.clientY}px`;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative h-full w-full bg-slate-950">
      
      <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[700px] w-[700px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[700px] w-[700px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(138,43,226,.1),rgba(255,255,255,0))]"></div>
      
      <div className="absolute top-[10%] left-[5%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(186,85,211,.1),rgba(255,255,255,0))]"></div>
      <div className="absolute bottom-[15%] right-[8%] h-[450px] w-[450px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(147,112,219,.12),rgba(255,255,255,0))]"></div>
      <div className="absolute top-[40%] left-[80%] h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(218,112,214,.08),rgba(255,255,255,0))]"></div>

      <div className="relative z-10 mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0 lg:flex lg:justify-between lg:gap-4">
        {/* Left Sidebar */}
        <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24 lg:pr-8">
          <div>  
            <h1 className="text-4xl font-bold text-stone-100">Triet Ha</h1>
            <h2 className="text-2xl font-semibold text-stone-100 mt-2">Software Engineer
            </h2>
            <p className="mt-4 text-purple-100 mb-5">
              Building Tommorrow&apos;s Technology Today with a Focus on AI
            </p>
            <a
              href="src/assets/TrietHa_Resume.pdf"
              className="inline-block bg-opacity-20 bg-transparent border border-purple-700 rounded-lg p-4 mb-12 text-purple-300 hover:text-purple-800 hover:bg-opacity-30 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume
            </a>
            <Navbar /> 
          </div>
          <div className="mt-8">
            <ul className="flex space-x-4">
              <Footer />
            </ul>
          </div>
        </div>

        {/* Right Content Area */}
        <div className="pt-24 lg:w-full lg:py-24 lg:pl-16 text-purple-100 ml-10">
          <div className="space-y-8">
            <section id="about"><Intro /></section>
            <section id="projects"><Portfolio /></section>
            <section id="experience"><Timeline /></section>
            <section id="contact"><Contact /></section>
          </div>
        </div>

      </div>
    </div>
  );
};


export default App;
