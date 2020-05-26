import React, { FunctionComponent } from 'react';
import Waves from './Waves';
import android from '../../assets/icons/android.png';
import IntelliJ from '../../assets/icons/IntelliJ.png';
import java from '../../assets/icons/java.png';
import typescript from '../../assets/icons/typescript.png';
import nodejs from '../../assets/icons/nodejs-512.png';
import python from '../../assets/icons/python.png';
import react from '../../assets/icons/react.png';
import redux from '../../assets/icons/redux.png';
import spring from '../../assets/icons/spring.png';
import styled from 'styled-components';
import SectionTitle from '../Section/SectionTitle';

import Section from '../Section/Section';
import { section1Color } from '../../themes/colors';
import { useTranslation } from 'react-i18next';

const icons = [
  {
    icon: react,
    url: 'https://reactjs.org',
    name: 'ReactJS'
  },
  {
    icon: typescript,
    url: 'https://www.typescriptlang.org/',
    name: 'TypeScript'
  },
  {
    icon: redux,
    url: 'https://redux.js.org',
    name: 'Redux'
  },
  {
    icon: nodejs,
    url: 'https://nodejs.org',
    name: 'Node.js'
  },
  {
    icon: spring,
    url: 'https://spring.io',
    name: 'Spring'
  },
  {
    icon: python,
    url: 'https://python.org',
    name: 'Python'
  },
  {
    icon: java,
    url: 'https://www.java.com',
    name: 'Java'
  },
  {
    icon: IntelliJ,
    url: 'https://www.jetbrains.com/idea/',
    name: 'Intellij'
  },
  {
    icon: android,
    url: 'https://www.android.com/',
    name: 'Android'
  }
];
const SkillsSection = styled(Section)``;
interface Props {
  sectionRef: React.RefObject<HTMLElement>;
}
const Skills: FunctionComponent<Props> = ({ sectionRef }) => {
  const { t } = useTranslation();
  return (
    <SkillsSection ref={sectionRef} mode={'primary'}>
      <SectionTitle title={t('section.title.skills')} />
      <Waves items={icons} />
    </SkillsSection>
  );
};

export default Skills;
