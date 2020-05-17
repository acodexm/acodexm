import { emailRegex } from './regexp';
import { FieldSubscription } from 'final-form';
import { FieldInputProps } from 'react-final-form';
import i18next from 'i18next';

const t = i18next.t.bind(i18next);

type Invalid = Pick<FieldSubscription, 'invalid' | 'modified' | 'visited' | 'submitFailed'>;
type Valid = Pick<FieldSubscription, 'valid' | 'modified' | 'visited'>;
type ErrMsg = Pick<FieldSubscription, 'error' | 'submitError'>;

export const isInvalid = ({ invalid, modified, visited, submitFailed }: Invalid) =>
  (invalid && visited && modified) || (invalid && submitFailed);

export const isValid = (input: FieldInputProps<any>, { valid, visited, modified }: Valid) =>
  !!(valid && visited && modified && input.value);

export const errorMsg = ({ error, submitError }: ErrMsg) => error || submitError;

export const isRequired = (required = true) => (value: any) =>
  !value && required ? t('validation.edit.required') : undefined;

export const mustBeNumber = (value: any) => (isNaN(value) ? t('validation.number') : undefined);

export const minValue = (min: number) => (value: any) =>
  isNaN(value) || value >= min ? undefined : t('validation.min.num', { min });

export const maxValue = (max: number) => (value: any) =>
  isNaN(value) || value <= max ? undefined : t('validation.max.num', { max });

export const minLength = (min: number) => (value: any) =>
  !value || value.length >= min ? undefined : t('validation.min', { min });

export const maxLength = (max: number) => (value: any) =>
  !value || value.length <= max ? undefined : t('validation.max', { max });

export const mustBeEmail = (value?: string) =>
  !value || (value !== '' && value.match(emailRegex)) ? undefined : t('validation.email');

export const composeValidators = (...validators: any[]) => (value: any) =>
  validators.reduce((error, validator) => error || validator(value), undefined);

export const hasLimitMin = (min: number, what: string) => (arr: any[] = []) =>
  arr.length >= min ? undefined : t('validation.arr.limit.min', { min, what });

export const hasLimitMax = (max: number, what: string) => (arr: any[]) =>
  arr.length <= max ? undefined : t('validation.arr.limit.max', { max, what });
