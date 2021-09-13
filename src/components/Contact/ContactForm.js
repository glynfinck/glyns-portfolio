import React, { useState } from 'react';
import styled from 'styled-components';
import ButtonSubmit from '../UI/ButtonSubmit';
import useInput from '../../hooks/use-input';
import emailjs from 'emailjs-com';

const ContactFormStyle = styled.form`
  width: 100%;
  .form-control {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 2rem;
    label {
      font-size: 1.8rem;
      padding-bottom: 1rem;
    }
    input,
    textarea {
      width: 100%;
      font-size: 2rem;
      background-color: var(--deep-dark);
      padding: 1.2rem;
      border-radius: 8px;
      outline: none;
      border: 1px solid var(--deep-dark);
    }
    textarea {
      min-height: 250px;
      resize: none;
    }
  }

  .invalid input,
  .invalid textarea {
    border: 1px solid #b40e0e;
    background-color: #bf9f9f;
  }

  .invalid input:focus,
  .invalid textarea:focus {
    background-color: var(--deep-dark);
  }

  .form-control .error-text {
    padding-top: 1rem;
    font-size: 1.8rem;
    color: red;
  }

  .error-message {
    color: red;
  }

  .form-button-group {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    align-content: center;
    gap: 2rem;

    p {
      font-size: 1.5rem;
    }

    .hidden {
      color: transparent;
      transition: all 0.4s ease;
    }
  }

  @media only screen and (max-width: 768px) {
    .form-control {
      label {
        font-size: 1.4rem;
      }
      input,
      textarea {
        font-size: 1.6rem;
        padding: 1rem;
      }
      .error-text {
        font-size: 1.4rem;
      }
    }
  }
`;

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const ContactForm = () => {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

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

    setHasSubmitted(true);
    setIsSubmitting(true);
    nameSubmitFormHandler();
    emailSubmitFormHandler();
    messageSubmitFormHandler();

    if (!isFormValid) {
      setHasSubmitted(false);
      setIsSubmitting(false);
      return;
    }

    console.log(nameValue);
    console.log(emailValue);
    console.log(messageValue);

    emailjs
      .sendForm(
        'gmail',
        'my_template',
        event.target,
        'user_aYbgmz1tckkSqrhf7HpHs'
      )
      .then(
        (result) => {
          if (result.status === 200) {
            setIsSubmitting(false);
            setIsSuccess(true);
          }
        },
        (error) => {
          setIsSubmitting(false);
          setIsSuccess(false);
        }
      );

    setTimeout(() => {
      setHasSubmitted(false);
    }, 4000);

    resetNameHandler();
    resetEmailHandler();
    resetMessageHandler();
  };

  return (
    <ContactFormStyle onSubmit={onSubmitFormHandler}>
      <div className={nameClass}>
        <label>Name</label>
        <input
          type="text"
          name="name"
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
          name="email"
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
          name="message"
          rows={10}
          value={messageValue}
          onChange={messageChangedHandler}
          onBlur={messageBlurHandler}
        />
        {messageValueHasError && <p className="error-text">Enter a message</p>}
      </div>
      <div className="form-button-group">
        <ButtonSubmit text="Send" />
        {isSubmitting && (
          <p className={hasSubmitted ? '' : 'hidden'}>Sending message...</p>
        )}
        {isSuccess && !isSubmitting && (
          <p className={hasSubmitted ? '' : 'hidden'}>Message sent!</p>
        )}
        {!isSuccess && !isSubmitting && (
          <p className={hasSubmitted ? '' : 'hidden'}>
            Message failed to send!
          </p>
        )}
      </div>
    </ContactFormStyle>
  );
};

export default ContactForm;
