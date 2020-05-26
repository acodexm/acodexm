import React, { FunctionComponent, useEffect, useState } from 'react';
import { FieldRenderProps } from 'react-final-form';
import { errorMsg, isInvalid } from './validator/validator';
import ReCAPTCHA from 'react-google-recaptcha';
import { useTranslation } from 'react-i18next';
import { Alert, Input, FancyInput, ErrorMsg, Counter, Textarea } from './FinalComponents.styles';

export const FinalInput = ({
  name,
  label,
  className,
  input,
  meta,
  maxLength,
  placeholder,
  ...rest
}: FieldRenderProps<any>) => (
  <FancyInput className={className}>
    <Input
      name={name}
      {...input}
      placeholder={' '}
      disabled={meta.submitting || (meta.data && meta.data.disabled)}
      {...rest}
      maxLength={maxLength}
    />
    <label htmlFor={name}>
      {label}
      <span id="placeholder">{placeholder ? `: ${placeholder}` : ''}</span>
    </label>
    {maxLength && input.value.length > 0 && <Counter>{`${input.value.length}/${maxLength}`}</Counter>}
    <ErrorMsg visible={isInvalid(meta)}>{errorMsg(meta)}</ErrorMsg>
  </FancyInput>
);

export const FinaTextarea = ({
  label,
  placeholder,
  className,
  input,
  meta,
  maxLength,
  name,
  ...rest
}: FieldRenderProps<any>) => (
  <FancyInput className={className}>
    <Textarea
      name={name}
      {...input}
      placeholder={' '}
      disabled={meta.submitting || (meta.data && meta.data.disabled)}
      {...rest}
      maxLength={maxLength}
    />
    <label htmlFor={name}>
      {label}
      <span id="placeholder">{`: ${placeholder || ''}`}</span>
    </label>
    {maxLength && input.value.length > 0 && <Counter>{`${input.value.length}/${maxLength}`}</Counter>}
    <ErrorMsg visible={isInvalid(meta)}>{errorMsg(meta)}</ErrorMsg>
  </FancyInput>
);
interface Theme {
  mode?: 'light' | 'dark';
}
type CaptchaTheme = FieldRenderProps<any> & Theme;

export const FinalReCaptcha: FunctionComponent<CaptchaTheme> = ({ className, input, meta, mode }) => (
  <div className={className}>
    <ReCAPTCHA theme={mode} sitekey={process.env.REACT_APP_RECAPTCHA_KEY || ''} onChange={input.onChange} />
    <ErrorMsg visible={isInvalid(meta)}>{errorMsg(meta)}</ErrorMsg>
  </div>
);
interface Submitt {
  submitError?: string;
  submitSucceeded?: boolean;
}

export const SubmitMessage: FunctionComponent<Submitt> = ({ submitError, submitSucceeded }) => {
  const { t } = useTranslation();
  const [show, setShow] = useState(true);
  useEffect(() => {
    setShow(true);
    const timer = setTimeout(() => {
      setShow(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [submitError, submitSucceeded]);

  if (submitSucceeded && show) return <Alert>{t('general.subbmit.success')}</Alert>;
  else if (submitError && show) return <Alert error>{t('general.subbmit.error')}</Alert>;
  else return null;
};
