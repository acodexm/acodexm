import React from 'react';
import styled from 'styled-components';
import {
  autocompleteFieldColor,
  errorColor,
  fieldColor,
  inputTextColor,
  textColor,
  validColor
} from '../../themes/colors';

const FancyInput = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  text-align: left;
  transition: 500ms;
  color: ${inputTextColor};
  label {
    width: 80%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 1.2rem;
    position: absolute;
    left: 2rem;
    opacity: 50%;
    top: 0.4rem;
    pointer-events: none;
    transition: all 400ms;
  }
  textarea,
  input {
    &:focus,
    &:not(:placeholder-shown),
    &:-webkit-autofill {
      & + label {
        top: -2rem;
        left: 1rem;
        opacity: 80%;
        font-size: 1rem;
        font-weight: bold;
        #placeholder {
          visibility: hidden;
        }
      }
    }
  }
`;
const Input = styled.input`
  height: 3rem;
  outline: none;
  overflow: hidden;
  padding: 1rem;
  width: 100%;
  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus {
    -webkit-text-fill-color: ${textColor};
    -webkit-box-shadow: 0 0 0px 1000px ${autocompleteFieldColor} inset;
    transition: background-color 5000s ease-in-out 0s;
  }
  background-color: transparent;
  background-image: ${fieldColor};
  font-size: 1.2em;
  font-weight: bold;
  cursor: text;
  border: none;
  border-radius: 0.5rem;
  color: ${inputTextColor};
`;
const Textarea = styled.textarea`
  height: 8rem;
  padding: 1rem;
  width: 100%;
  cursor: text;
  font-size: 1.2em;
  font-weight: bold;
  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus {
    -webkit-text-fill-color: ${textColor};
    -webkit-box-shadow: 0 0 0px 1000px ${autocompleteFieldColor} inset;
    transition: background-color 5000s ease-in-out 0s;
  }
  border: none;
  border-radius: 0.5rem;
  outline: none;
  resize: vertical;
  background-color: transparent;
  background-image: ${fieldColor};
  color: ${inputTextColor};
`;

const Counter = styled.span`
  float: right;
  margin-top: 1px;
  font-size: 11px;
  line-height: 11px;
  text-align: end;
`;
const ErrorMsg = styled.span<{ visible?: boolean }>`
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: relative;
  left: 1rem;
  top: 0;
  color: ${errorColor};
`;

const Alert = styled.div<{ error?: boolean }>`
  min-width: 10rem;
  max-width: max-content;
  padding: 2rem;
  border-radius: 1rem;
  background-color: ${(props) => (props.error ? errorColor : validColor)};
  margin: 2rem auto;
`;
export { Alert, Input, FancyInput, ErrorMsg, Counter, Textarea };
