import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import SectionTitle from '../Section/SectionTitle';
import Section from '../Section/Section';
import { section1Color, section2Color } from '../../themes/colors';
import { useTranslation } from 'react-i18next';

const WorkSection = styled(Section)`
  background-color: ${section1Color};
  min-height: 50vh;
`;
interface Props {
  sectionRef: React.RefObject<HTMLElement>;
}
const Work: FunctionComponent<Props> = ({ sectionRef }) => {
  const { t } = useTranslation();
  return (
    <WorkSection ref={sectionRef}>
      <SectionTitle title={t('section.title.work')} />
    </WorkSection>
  );
};

export default Work;
