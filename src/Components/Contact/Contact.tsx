import React, { FunctionComponent } from 'react';
import { Field, Form } from 'react-final-form';
import createDecorator from 'final-form-focus';
import { composeValidators, isRequired, mustBeEmail } from '../FinalForm/validator/validator';
import { getMessage } from '../../i18n';
import { Col, Container, Row } from 'styled-bootstrap-grid';
import SectionTitle from '../Section/SectionTitle';
import emailjs from 'emailjs-com';
import { ContactSection, FormInput, FormReCaptcha, FormTextarea, SubmitButton } from './ContactStyles';

emailjs.init(process.env.REACT_APP_EMAILJS_USER_ID || 'user_CE0Pjg4Iq1GYpRoSolxiG');

const focusOnError = createDecorator();

interface Props {
  sectionRef: React.RefObject<HTMLElement>;
}
export const Contact: FunctionComponent<Props> = ({ sectionRef }) => {
  const onSubmit = (values: any) => {
    console.log(values);
    emailjs.send('gmail', 'acodexm', values).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
  return (
    <ContactSection ref={sectionRef}>
      <SectionTitle title={getMessage('section.title.contact')} />
      <Container fluid>
        <Form
          onSubmit={onSubmit}
          decorators={[focusOnError]}
          render={({ handleSubmit, submitting }) => (
            <form onSubmit={handleSubmit} style={{ maxWidth: '1100px', margin: 'auto' }}>
              <Row>
                <Col lg={4} sm={12}>
                  <Field name="from_name" validate={isRequired()}>
                    {(field) => <FormInput {...field} placeholder={getMessage('contact.name')} />}
                  </Field>
                </Col>
                <Col lg={4} sm={12}>
                  <Field name="from_email" validate={composeValidators(mustBeEmail, isRequired())}>
                    {(field) => <FormInput {...field} type="email" placeholder={getMessage('contact.email')} />}
                  </Field>
                </Col>
                <Col lg={4} sm={12}>
                  <Field name="subject" validate={isRequired()}>
                    {(field) => <FormInput {...field} placeholder={getMessage('contact.subject')} />}
                  </Field>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Field name="message_html" validate={isRequired()}>
                    {(field) => <FormTextarea {...field} type="textarea" placeholder={'dup'} />}
                  </Field>
                </Col>
              </Row>
              <Field name="g-recaptcha-response" validate={isRequired()}>
                {(field) => <FormReCaptcha {...field} />}
              </Field>
              <SubmitButton className="btn btn-success roboto" type="submit" disabled={submitting}>
                {getMessage('contact.send')}
              </SubmitButton>
            </form>
          )}
        />
      </Container>
    </ContactSection>
  );
};
