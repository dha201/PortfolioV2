import { useEffect, useState } from 'react';

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('');
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const sections = document.querySelectorAll('section');
  
        if (scrollPosition < windowHeight / 3) {
          setActiveSection('about');
          return;
        }
  
        let index = sections.length;
        while (--index && sections[index] && window.scrollY + window.innerHeight / 2 < sections[index].offsetTop) {
            // Intentionally empty: This loop is used to find the correct section index
        }
  
        if (sections[index]) {
          setActiveSection(sections[index].id);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      handleScroll();
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  return (
    <nav className="lg:static lg:transform-none lg:left-0 lg:bg-transparent lg:p-0 lg:z-auto">
      <ul className="lg:space-y-2">
        <li>
            <a href="#about" className={`nav-link relative font-semibold text-sm text-gray-400 hover:text-white ${activeSection === 'about' ? 'active-section' : ''}`}>
                ABOUT
            </a>
        </li>
        <li>
          <a href="#projects" className={`nav-link relative font-semibold text-sm text-gray-400 hover:text-white ${activeSection === 'projects' ? 'active-section' : ''}`}>
            PROJECTS
          </a>
        </li>
        <li>
          <a href="#experience" className={`nav-link relative font-semibold text-sm text-gray-400 hover:text-white ${activeSection === 'experience' ? 'active-section' : ''}`}>
            EXPERIENCE
          </a>
        </li>
      </ul>
    </nav>
  );
  
  
};

export default Navbar;
