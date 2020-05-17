import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import SectionTitle from '../Section/SectionTitle';

import Section from '../Section/Section';
import { section2Color } from '../../themes/colors';
import { useTranslation } from 'react-i18next';

const EduSection = styled(Section)`
  background-color: ${section2Color};
  min-height: 50vh;
`;
interface Props {
  sectionRef: React.RefObject<HTMLElement>;
}
const Education: FunctionComponent<Props> = ({ sectionRef }) => {
  const { t } = useTranslation();

  return (
    <EduSection ref={sectionRef}>
      <SectionTitle title={t('section.title.education')} />
    </EduSection>
  );
};

export default Education;
