import React, { Suspense, useEffect, useRef, useState } from 'react';
import 'react-toggle/style.css';
import ErrorBoundary from './Components/Error/ErrorBoundary';
import { BaseCSS } from 'styled-bootstrap-grid';
import { ThemeProvider } from 'styled-components';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Header/Navbar';
import Welcome from './Components/Welcome/Welcome';
import useSticky from './hooks/useSticky';
import { Contact } from './Components/Contact/Contact';
import Skills from './Components/Skills/Skills';
import About from './Components/About/About';
import Education from './Components/Education/Education';
import Projects from './Components/Projects/Projects';
import Work from './Components/Work/Work';
import { useTranslation } from 'react-i18next';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSetStateWithStorage } from './hooks/useSetState';

const App = () => {
  const [state, setState] = useSetStateWithStorage({ mode: 'dark' }, 'APPLICATION_THEME');
  const { t } = useTranslation();
  const { sticky, element } = useSticky();

  const scrollToRef = (ref: React.RefObject<HTMLElement>) => () => {
    // @ts-ignore
    window.scrollTo(0, ref.current.offsetTop - 116);
  };
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const workRef = useRef(null);
  const educationRef = useRef(null);
  const contactRef = useRef(null);
  const sections = [
    { name: t('section.about'), scrollTo: scrollToRef(aboutRef) },
    { name: t('section.skills'), scrollTo: scrollToRef(skillsRef) },
    { name: t('section.projects'), scrollTo: scrollToRef(projectsRef) },
    { name: t('section.work'), scrollTo: scrollToRef(workRef) },
    { name: t('section.education'), scrollTo: scrollToRef(educationRef) },
    { name: t('section.contact'), scrollTo: scrollToRef(contactRef) }
  ];
  const onChangeTheme = () => {
    setState((theme) => ({ mode: theme.mode === 'dark' ? 'light' : 'dark' }));
  };
  return (
    <ErrorBoundary>
      <ThemeProvider theme={{ mode: state.mode }}>
        <Suspense fallback={<FontAwesomeIcon icon={faSpinner} spin />}>
          <div className="App">
            <BaseCSS />
            <Navbar sticky={sticky} sections={sections} onChangeTheme={onChangeTheme} />
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
        </Suspense>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default App;
