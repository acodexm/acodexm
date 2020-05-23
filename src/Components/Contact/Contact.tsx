import React, { FunctionComponent } from 'react';
import { Field, Form } from 'react-final-form';
import createDecorator from 'final-form-focus';
import { composeValidators, isRequired, mustBeEmail } from '../FinalForm/validator/validator';
import { Col, Container, Row } from 'styled-bootstrap-grid';
import SectionTitle from '../Section/SectionTitle';
import emailjs from 'emailjs-com';
import { ContactSection, FormInput, FormReCaptcha, FormTextarea, SubmitButton } from './ContactStyles';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'styled-components';

emailjs.init(process.env.REACT_APP_EMAILJS_USER_ID || '');

const focusOnError = createDecorator();

interface Props {
  sectionRef: React.RefObject<HTMLElement>;
}
export const Contact: FunctionComponent<Props> = ({ sectionRef }) => {
  const onSubmit = async (values: any) => {
    await emailjs.send('gmail', 'acodexm', values).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
  const { t } = useTranslation();
  const { mode } = useTheme();
  return (
    <ContactSection ref={sectionRef}>
      <SectionTitle title={t('section.title.contact')} />
      <Container fluid>
        <Form
          onSubmit={onSubmit}
          decorators={[focusOnError]}
          render={({ handleSubmit, submitting }) => (
            <form onSubmit={handleSubmit} style={{ maxWidth: '1400px', margin: 'auto' }}>
              <Row>
                <Col lg={4} sm={12}>
                  <Field name="from_name" validate={isRequired()} maxLength={50}>
                    {(field) => <FormInput {...field} label="Name" placeholder={t('contact.name')} />}
                  </Field>
                </Col>
                <Col lg={4} sm={12}>
                  <Field name="from_email" validate={composeValidators(mustBeEmail, isRequired())} maxLength={100}>
                    {(field) => <FormInput {...field} type="email" label="Email" placeholder={t('contact.email')} />}
                  </Field>
                </Col>
                <Col lg={4} sm={12}>
                  <Field name="subject" validate={isRequired()} maxLength={100}>
                    {(field) => <FormInput {...field} label="Subject" placeholder={t('contact.subject')} />}
                  </Field>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Field name="message_html" maxLength={1000} validate={isRequired()}>
                    {(field) => <FormTextarea {...field} type="textarea" label={t('contact.message')} />}
                  </Field>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Field name="g-recaptcha-response" validate={isRequired()}>
                    {(field) => <FormReCaptcha mode={mode} {...field} />}
                  </Field>
                  <SubmitButton className="btn btn-success roboto" type="submit" disabled={submitting}>
                    {t('contact.send')}
                  </SubmitButton>
                </Col>
              </Row>
            </form>
          )}
        />
      </Container>
    </ContactSection>
  );
};
