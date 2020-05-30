import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { Contact } from './Contact';
import { ThemeProvider } from 'styled-components';
import emailjs from './__mocks__/emailjs-com';
import user from '@testing-library/user-event';
import sleep from '../../utils/tests/sleep';
import i18nTEST from '../../utils/tests/i18nTEST';

jest.mock('emailjs-com');
jest.mock('react-google-recaptcha');

const contactData = {
  from_name: 'Name',
  from_email: 'test@test.com',
  subject: 'Subject',
  message_html: 'Message',
  'g-recaptcha-response': true
};

const renderContact = () => {
  const ref = React.createRef();
  const { getByTestId, ...rest } = render(
    <ThemeProvider theme={{ mode: 'dark' }}>
      <Contact sectionRef={ref as React.RefObject<HTMLElement>} />
    </ThemeProvider>
  );
  const name = getByTestId('form_name');
  const email = getByTestId('form_email');
  const subject = getByTestId('form_subject');
  const message = getByTestId('form_message');
  const recaptcha = getByTestId('form_recaptcha');
  const submit = getByTestId('form_submit');
  return { name, email, subject, message, recaptcha, submit, getByTestId, ...rest };
};
describe('test user form interaction', () => {
  afterEach(cleanup);

  beforeAll(() => i18nTEST);
  test('form correctly submitted', async () => {
    const { name, email, subject, message, recaptcha, submit, getByTestId, queryByText } = renderContact();
    expect(emailjs.init).toBeCalledTimes(1);
    expect(emailjs.init).toHaveBeenCalledWith(process.env.REACT_APP_EMAILJS_USER_ID);
    await user.type(name, contactData.from_name);
    expect(name).toHaveValue(contactData.from_name);
    await user.type(email, contactData.from_email);
    expect(email).toHaveValue(contactData.from_email);
    await user.type(subject, contactData.subject);
    expect(subject).toHaveValue(contactData.subject);
    await user.type(message, contactData.message_html);
    expect(message).toHaveValue(contactData.message_html);
    await user.click(recaptcha);
    expect(recaptcha).toBeChecked();
    await user.click(submit);
    expect(getByTestId('form_submit')).toBeDisabled();
    await sleep(100);
    expect(emailjs.send).toBeCalledTimes(1);
    expect(emailjs.send).toHaveBeenCalledWith('gmail', 'acodexm', contactData);
    expect(queryByText('validation.edit.required')).not.toBeInTheDocument();
    expect(queryByText('validation.email')).not.toBeInTheDocument();
  });
  test('form not filled returns input errors', async () => {
    const { email, submit, queryAllByText } = renderContact();
    await user.type(email, 'notValidEmail');
    user.click(submit);
    await sleep(1000);
    expect(queryAllByText('validation.edit.required')).not.toHaveLength(0);
    expect(queryAllByText('validation.email')).not.toHaveLength(0);
  });
});
