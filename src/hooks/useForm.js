import { useState } from 'react';

export const useForm = (initialValue = '') => {
  const [value, setValue] = useState(initialValue);
  const handleChange = (e) => {
    const nextValue = e.target.value;
    setValue((prevValue) => nextValue);
  };

  const handleSubmit = (callback) => (e) => {
    e.preventDefault();
    callback(value);
  };

  return {
    value,
    handleChange,
    handleSubmit,
  };
};
