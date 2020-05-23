import styled, { css } from 'styled-components';
import Section from '../Section/Section';
import { section1Color, textColor } from '../../themes/colors';
import { FinalInput, FinalReCaptcha, FinaTextarea } from '../FinalForm/FinalComponents';
import { contactBackground } from '../../themes/images';

const ContactSection = styled.section`
  background-color: ${section1Color};
  background-attachment: fixed;
  background-size: cover;
  line-height: 1.8;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${textColor};
  text-align: center;
  position: relative;
  min-height: 50vh;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-image: ${contactBackground};
    opacity: 30%;
  }
`;
const FormInput = styled(FinalInput)`
  min-height: 5rem;
`;
const FormTextarea = styled(FinaTextarea)`
  min-height: 7rem;
`;
const FormReCaptcha = styled(FinalReCaptcha)`
  div {
    display: flex;
    justify-content: center;
  }
  padding: 3px;
  margin: 0.7rem auto;
`;
const SubmitButton = styled.button`
  height: 50px;
  padding: 1rem;
  margin: 1rem;
  background-color: coral;
  border: 1px solid black;
  border-radius: 0.5rem;
  ${(props) =>
    props.disabled
      ? css`
          background-color: rgba(139, 139, 49, 0.53);
          cursor: not-allowed;
        `
      : ''}
`;
export { FormReCaptcha, FormTextarea, FormInput, ContactSection, SubmitButton };
