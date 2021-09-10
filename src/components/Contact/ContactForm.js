import React from 'react';
import styled from 'styled-components';
import ButtonSubmit from '../UI/ButtonSubmit';
import useInput from '../../hooks/use-input';

const ContactFormStyle = styled.div`
  form {
    .form-control {
      display: flex;
      flex-direction: column;
      padding: 1rem 0;
      font-size: 1.5rem;
      label {
        padding-bottom: 1rem;
      }
      input,
      textarea {
        background-color: var(--deep-dark);
        padding: 1rem;
        border-radius: 8px;
        outline: none;
        border: 1px solid var(--deep-dark);
      }
      textarea {
        resize: none;
      }
    }
  }

  .invalid input {
    border: 1px solid #b40e0e;
    background-color: #fddddd;
  }

  .invalid input:focus,
  .invalid textarea:focus {
    background-color: var(--gray-2);
  }

  .form-control .error-text {
    color: #b40e0e;
  }

  .error-message {
    color: red;
  }
`;

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
const ContactForm = () => {
  const {
    value: nameValue,
    isValid: isNameValid,
    hasError: nameValueHasError,
    valueChangedHandler: nameChangedHandler,
    valueBlurHandler: nameBlurHandler,
    submitFormHandler: nameSubmitFormHandler,
    reset: resetNameHandler,
  } = useInput((name) => name !== '');

  const {
    value: emailValue,
    isValid: isEmailValid,
    hasError: emailValueHasError,
    valueChangedHandler: emailChangedHandler,
    valueBlurHandler: emailBlurHandler,
    submitFormHandler: emailSubmitFormHandler,
    reset: resetEmailHandler,
  } = useInput(validateEmail);

  const {
    value: messageValue,
    isValid: isMessageValid,
    hasError: messageValueHasError,
    valueChangedHandler: messageChangedHandler,
    valueBlurHandler: messageBlurHandler,
    submitFormHandler: messageSubmitFormHandler,
    reset: resetMessageHandler,
  } = useInput((message) => message !== '');

  const isFormValid = isNameValid && isEmailValid && isMessageValid;

  const nameClass = nameValueHasError ? 'form-control invalid' : 'form-control';

  const emailClass = emailValueHasError
    ? 'form-control invalid'
    : 'form-control';

  const messageClass = messageValueHasError
    ? 'form-control invalid'
    : 'form-control';

  const onSubmitFormHandler = (event) => {
    event.preventDefault();

    nameSubmitFormHandler();
    emailSubmitFormHandler();
    messageSubmitFormHandler();

    if (!isFormValid) return;

    console.log(nameValue);
    console.log(emailValue);
    console.log(messageValue);

    resetNameHandler();
    resetEmailHandler();
    resetMessageHandler();
  };

  return (
    <ContactFormStyle>
      <form onSubmit={onSubmitFormHandler}>
        <div className={nameClass}>
          <label>Name</label>
          <input
            type="text"
            value={nameValue}
            onChange={nameChangedHandler}
            onBlur={nameBlurHandler}
          />
          {nameValueHasError && <p className="error-text">Enter a name</p>}
        </div>
        <div className={emailClass}>
          <label>E-mail</label>
          <input
            type="text"
            value={emailValue}
            onChange={emailChangedHandler}
            onBlur={emailBlurHandler}
          />
          {emailValueHasError && (
            <p className="error-text">Enter a valid email</p>
          )}
        </div>
        <div className={messageClass}>
          <label>Message</label>
          <textarea
            rows={10}
            value={messageValue}
            onChange={messageChangedHandler}
            onBlur={messageBlurHandler}
          />
          {messageValueHasError && (
            <p className="error-text">Enter a message</p>
          )}
        </div>
        <ButtonSubmit text="Send" />
      </form>
    </ContactFormStyle>
  );
};

export default ContactForm;
