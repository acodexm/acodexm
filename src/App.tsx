import React, { useRef, useState } from 'react';
import './i18n';
import 'react-toggle/style.css';
import ErrorBoundary from './Components/Error/ErrorBoundary';
import { BaseCSS } from 'styled-bootstrap-grid';
import { ThemeProvider } from 'styled-components';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Header/Navbar';
import Welcome from './Components/Header/Welcome';
import useSticky from './hooks/useSticky';
import { Contact } from './Components/Contact/Contact';
import Skills from './Components/Skills/Skills';
import About from './Components/About/About';
import Education from './Components/Education/Education';
import Projects from './Components/Projects/Projects';
import Work from './Components/Work/Work';
import { getMessage } from './i18n';

const App = () => {
  const [state, setState] = useState({ mode: 'dark' });
  const { sticky, element } = useSticky();
  const scrollToRef = (ref: React.RefObject<HTMLElement>) => () => {
    // @ts-ignore
    window.scrollTo(0, ref.current.offsetTop - 116);
  };
  const topRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const workRef = useRef(null);
  const educationRef = useRef(null);
  const contactRef = useRef(null);
  const sections = [
    { name: getMessage('section.welcome'), scrollTo: scrollToRef(topRef) },
    { name: getMessage('section.about'), scrollTo: scrollToRef(aboutRef) },
    { name: getMessage('section.skills'), scrollTo: scrollToRef(skillsRef) },
    { name: getMessage('section.projects'), scrollTo: scrollToRef(projectsRef) },
    { name: getMessage('section.work'), scrollTo: scrollToRef(workRef) },
    { name: getMessage('section.education'), scrollTo: scrollToRef(educationRef) },
    { name: getMessage('section.contact'), scrollTo: scrollToRef(contactRef) }
  ];
  const onChangeTheme=()=>{
    setState((theme) => ({ mode: theme.mode === 'dark' ? 'light' : 'dark' }))
  }
  return (
    <ErrorBoundary>
      <ThemeProvider theme={{ mode: state.mode }}>
        <div className="App" ref={topRef}>
          <BaseCSS />
          <Navbar sticky={sticky} sections={sections} onChangeTheme={onChangeTheme}/>
          <main>
            <Welcome element={element} />
            <About sectionRef={aboutRef} />
            <Skills sectionRef={skillsRef} />
            <Projects sectionRef={projectsRef} />
            <Work sectionRef={workRef} />
            <Education sectionRef={educationRef} />
            <Contact sectionRef={contactRef} />
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default App;
