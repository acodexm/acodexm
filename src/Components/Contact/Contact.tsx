import React, { FunctionComponent } from 'react';
import { Field, Form } from 'react-final-form';
import createDecorator from 'final-form-focus';
import { composeValidators, isRequired, mustBeEmail } from '../FinalForm/validator/validator';
import { MessageFactory } from '../../i18n';
import { FinalInput, FinaTextarea } from '../FinalForm/FinalComponents';
import { Col, Container, Row } from 'styled-bootstrap-grid';
import ReactJson from 'react-json-view-ts';
import styled from 'styled-components';

const getMessage = MessageFactory('contact');

const focusOnError = createDecorator();
const ContactSection = styled.section`
  background-color: #1f1f1f;
  background-attachment: fixed;
  background-size: cover;
  line-height: 1.8;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const FormInput = styled(FinalInput)`
  color: wheat;
  padding: 3px;
  margin: 0.7rem auto;
  background-color: rgba(255, 119, 0, 0.47);
  input {
  }
  #error {
    display: block;
    color: red;
  }
`;
const FormTextarea = styled(FinaTextarea)`
  color: wheat;
  padding: 3px;
  margin: 0.7rem auto;
  background-color: rgba(255, 119, 0, 0.47);
  input {
  }
  #error {
    display: block;
    color: red;
  }
`;
const SubmitButton = styled.button`
  height: 50px;
  padding: 1rem;
  margin: 1rem;
  background-color: coral;
  border: 1px solid black;
  border-radius: 0.5rem;
`;
interface Props {
  sectionRef: React.RefObject<HTMLElement>;
}
export const Contact: FunctionComponent<Props> = ({ sectionRef }) => {
  const onSubmit = (values: any) => {
    console.log(values);
    // await onSend(serializeData({ ...values }));
  };
  return (
    <ContactSection ref={sectionRef}>
      <Container fluid>
        <Form
          onSubmit={onSubmit}
          decorators={[focusOnError]}
          render={({ submitError, handleSubmit, submitting }) => (
            <form onSubmit={handleSubmit} style={{maxWidth:'1100px' ,margin:'auto'}}>
              <Row >
                <Col lg={4} sm={12}>
                  <Field name="name" validate={isRequired()}>
                    {(field) => <FormInput {...field} />}
                  </Field>
                </Col>
                <Col lg={4} sm={12}>
                  <Field name="email" validate={composeValidators(mustBeEmail, isRequired())}>
                    {(field) => <FormInput {...field} type="email" />}
                  </Field>
                </Col>
                <Col lg={4} sm={12}>
                  <Field name="subject" validate={isRequired()}>
                    {(field) => <FormInput {...field} />}
                  </Field>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Field name="content" validate={isRequired()}>
                    {(field) => <FormTextarea {...field} type="textarea" />}
                  </Field>
                </Col>
                <ReactJson src={submitError} />
              </Row>
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
