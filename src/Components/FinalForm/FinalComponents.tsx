import React, { ReactNode } from 'react';
import { Field, FieldRenderProps } from 'react-final-form';
import createDecorator from 'final-form-calculate';
import { get } from 'lodash';
import { errorMsg, isInvalid, isValid } from './validator/validator';
import styled from 'styled-components';
import { media } from 'styled-bootstrap-grid';

interface Condition {
  when: string;
  is: any;
  isNot: any;
  children: ReactNode;
}
interface Remove {
  when: string;
  is: any;
  isNot: any;
  children: ReactNode;
}
interface Input extends React.HTMLProps<HTMLInputElement> {
  invalid?: boolean | undefined;
  valid?: boolean | undefined;
}
interface CustomInput extends React.HTMLProps<HTMLInputElement> {
  invalid?: boolean | undefined;
}

const Input = styled.input<Input>`
  height: 3rem;
  width: 100%;
  cursor: text;
  border-width: 1px;
  border-style: solid;
  border-radius: 0.25rem;
  box-shadow: ${({ invalid, valid }) => (invalid ? 'red' : valid ? 'green' : '')};
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  border-color: ${({ invalid, valid }) => (invalid ? 'red' : valid ? 'green' : '')};
`;
const Textarea = styled.textarea<Input>`
  height: 8rem;
  width: 100%;
  cursor: text;
  border-width: 1px;
  border-style: solid;
  border-radius: 0.25rem;
  box-shadow: ${({ invalid, valid }) => (invalid ? 'red' : valid ? 'green' : '')};
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  border-color: ${({ invalid, valid }) => (invalid ? 'red' : valid ? 'green' : '')};
`;
const CustomInput = styled.input<CustomInput>`
  outline-color: ${({ invalid }) => (invalid ? 'red' : '')};
`;

const Counter = styled.span`
  float: right;
  margin-top: 1px;
  font-size: 11px;
  line-height: 11px;
  color: darkgray;
  width: 100%;
  text-align: end;
`;

export const Condition = ({ when, is, isNot, children }: Condition) => (
  <Field name={when} subscription={{ value: true }}>
    {({ input: { value } }) => {
      if (!value) return null;
      if (is) return JSON.stringify(value) === JSON.stringify(is) ? children : null;
      return JSON.stringify(value) !== JSON.stringify(isNot) ? children : null;
    }}
  </Field>
);
export const FinalCheckbox = ({ input, meta, label, withErrorMessage, id, ...rest }: FieldRenderProps<any>) => (
  <>
    <label htmlFor={id}>{label}</label>
    <CustomInput
      id={id}
      invalid={isInvalid(meta)}
      {...input}
      disabled={meta.submitting || (meta.data && meta.data.disabled)}
      {...rest}
    />
    {withErrorMessage && isInvalid(meta) && <span style={{ color: 'red' }}>{errorMsg(meta)}</span>}
  </>
);
export const FinalInput = ({ input, meta, maxLength, ...rest }: FieldRenderProps<any>) => (
  <>
    <Input
      valid={isValid(input, meta)}
      invalid={isInvalid(meta)}
      {...input}
      disabled={meta.submitting || (meta.data && meta.data.disabled)}
      {...rest}
      maxLength={maxLength}
    />
    <Counter>{maxLength && `${input.value.length || 0}/${maxLength}`}</Counter>
    {isInvalid(meta) && <span id="error">{errorMsg(meta)}</span>}
  </>
);
export const FinaTextarea = ({ input, meta, maxLength, ...rest }: FieldRenderProps<any>) => (
  <>
    <Textarea
      valid={isValid(input, meta)}
      invalid={isInvalid(meta)}
      {...input}
      disabled={meta.submitting || (meta.data && meta.data.disabled)}
      {...rest}
      maxLength={maxLength}
    />
    <Counter>{maxLength && `${input.value.length || 0}/${maxLength}`}</Counter>
    {isInvalid(meta) && <span id="error">{errorMsg(meta)}</span>}
  </>
);
export const removeField = (when: string, field: string, is: any, isNot: any) =>
  createDecorator({
    field: when,
    updates: {
      [field]: (value: any, allValues: any[]) => {
        if (is) return JSON.stringify(value) === JSON.stringify(is) ? get(allValues, field) : undefined;
        return JSON.stringify(value) !== JSON.stringify(isNot) ? get(allValues, field) : undefined;
      }
    }
  });
interface SubmitError {
  submitError: string[] | string;
  defaultMsg: string;
  key: any;
  className: string;
}
// export const SubmitError: React.FC<SubmitError> = ({ key, submitError, defaultMsg, className }) => {
//   let errorMessage = defaultMsg;
//   if (!submitError) return null;
//   if (Array.isArray(submitError))
//     return submitError.map((err, i) => (
//       <SubmitError key={i} submitError={err} defaultMsg={defaultMsg} className={className} />
//     ));
//
//   if (submitError) errorMessage = submitError;
//
//   return (
//     <div key={key} color="danger" className={className}>
//       {errorMessage}
//     </div>
//   );
// };
