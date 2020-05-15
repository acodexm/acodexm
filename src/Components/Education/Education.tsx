import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import SectionTitle from '../Section/SectionTitle';
import { getMessage } from '../../i18n';
import Section from '../Section/Section';
import { section2Color } from '../../themes/colors';

const EduSection = styled(Section)`
  background-color: ${section2Color};
  min-height: 50vh;
`;
interface Props {
  sectionRef: React.RefObject<HTMLElement>;
}
const Education: FunctionComponent<Props> = ({ sectionRef }) => {
  return (
    <EduSection ref={sectionRef}>
      <SectionTitle title={getMessage('section.title.education')} />
    </EduSection>
  );
};

export default Education;
