import styled, { css } from 'styled-components';
import Section from '../Section/Section';
import { section1Color, textColor } from '../../themes/colors';
import { FinalInput, FinalReCaptcha, FinaTextarea } from '../FinalForm/FinalComponents';

const ContactSection = styled(Section)`
  background-color: ${section1Color};
  min-height: 50vh;
`;
const placeholder = css`
    :focus {
      ::placeholder,
      ::-webkit-input-placeholder {
        color: transparent;
      }
      :-ms-input-placeholder {
        color: transparent;
      }
    }
    ::placeholder,
    ::-webkit-input-placeholder {
      color: white;
    }
    :-ms-input-placeholder {
      color: white;
    }`;
const FormInput = styled(FinalInput)`
  color: wheat;
  margin: 0.7rem auto;
  input {
    padding: 1rem;
    background-color: rgba(255, 119, 0, 0.47);
    color: ${textColor};
    ${placeholder}
  }
`;
const FormTextarea = styled(FinaTextarea)`
  color: wheat;
  margin: 0.7rem auto;
  textarea {
    padding: 1rem;
    background-color: rgba(255, 119, 0, 0.47);
    color: ${textColor};
    ${placeholder}
  }
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
`;
export {FormReCaptcha,FormTextarea,FormInput,ContactSection,SubmitButton}