import React from 'react';

export default function useValidation() {
  const [inputValues, setInputValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isFormValid, setIsFormValid] = React.useState(false);

  function onInputChange(e) {
    setInputValues(inputs => ({
      ...inputs,
      [e.target.name]: e.target.value,
    }));
    setErrors(errors => ({
      ...errors,
      [e.target.name]: e.target.validity.patternMismatch
        ? 'Используйте только Буквы, дефис и пробел.'
        : e.target.validationMessage,
    }));
    setIsFormValid(e.target.closest('form').checkValidity());
    console.dir(e.target);
  }

  const resetForm = React.useCallback(
    (userInfo = {}, errors = {}, formIsValid = false) => {
      setInputValues(userInfo);
      setErrors(errors);
      setIsFormValid(formIsValid);
    },
    [setInputValues, setErrors, setIsFormValid]
  );

  return { inputValues, errors, onInputChange, isFormValid, resetForm };
}
