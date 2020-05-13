import { emailRegex } from './regexp';
import { FieldSubscription } from 'final-form';
import { getMessage, MessageFactory } from '../../../i18n';
import { FieldInputProps } from 'react-final-form';

const validationMessage = MessageFactory('validation');
type Invalid = Pick<FieldSubscription, 'invalid' | 'modified' | 'visited' | 'submitFailed'>;
type Valid = Pick<FieldSubscription, 'valid' | 'modified' | 'visited'>;
type ErrMsg = Pick<FieldSubscription, 'error' | 'submitError'>;

export const isInvalid = ({ invalid, modified, visited, submitFailed }: Invalid) =>
  (invalid && visited && modified) || (invalid && submitFailed);

export const isValid = (input: FieldInputProps<any>, { valid, visited, modified }: Valid) =>
  !!(valid && visited && modified && input.value);

export const errorMsg = ({ error, submitError }: ErrMsg) => error || submitError;

export const isRequired = (required = true) => (value: any) =>
  !value && required ? validationMessage('edit.required') : undefined;

export const mustBeNumber = (value: any) => (isNaN(value) ? validationMessage('number') : undefined);

export const minValue = (min: number) => (value: any) =>
  isNaN(value) || value >= min ? undefined : validationMessage('min.num', { min });

export const maxValue = (max: number) => (value: any) =>
  isNaN(value) || value <= max ? undefined : validationMessage('max.num', { max });

export const minLength = (min: number) => (value: any) =>
  !value || value.length >= min ? undefined : validationMessage('min', { min });

export const maxLength = (max: number) => (value: any) =>
  !value || value.length <= max ? undefined : validationMessage('max', { max });

export const mustBeEmail = (value?: string) =>
  !value || (value !== '' && value.match(emailRegex)) ? undefined : validationMessage('email');

export const composeValidators = (...validators: any[]) => (value: any) =>
  validators.reduce((error, validator) => error || validator(value), undefined);

export const hasLimitMin = (min: number) => (arr: any[] = []) =>
  arr.length >= min ? undefined : validationMessage('arr.limit.min', { min, what: getMessage('general.attachment') });

export const hasLimitMax = (max: number) => (arr: any[]) =>
  arr.length <= max ? undefined : validationMessage('arr.limit.max', { max, what: getMessage('general.attachment') });
