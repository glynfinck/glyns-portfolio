import { useReducer } from 'react';

const initInputState = {
  value: '',
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  switch (action.type) {
    case 'INPUT':
      return {
        ...state,
        value: action.payload.value,
      };
    case 'BLUR':
      return {
        ...state,
        isTouched: true,
      };
    case 'SUBMIT':
      return {
        ...state,
        isTouched: true,
      };
    case 'RESET':
      return initInputState;
    default:
      return state;
  }
};

const useInput = (validateValue) => {
  const [inputState, dispatch] = useReducer(inputStateReducer, initInputState);
  const valueIsValid = validateValue(inputState.value);

  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangedHandler = (event) => {
    dispatch({
      type: 'INPUT',
      payload: { value: event.target.value },
    });
  };

  const submitFormHandler = () => {
    dispatch({ type: 'SUBMIT' });
  };

  const valueBlurHandler = () => {
    dispatch({ type: 'BLUR' });
  };

  const reset = () => {
    dispatch({ type: 'RESET' });
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangedHandler,
    valueBlurHandler,
    submitFormHandler,
    reset,
  };
};

export default useInput;
