import { useState } from 'react';

export const useForm = (initialValue = '') => {
  const [value, setValue] = useState(initialValue);
  const handleChange = (e) => {
    const nextValue = e.target.value;
    setValue((prevValue) => nextValue);
  };

  const handleSubmit = (callback) => async (e) => {
    e.preventDefault();
    await callback(value);
    setValue('');
  };

  return {
    value,
    handleChange,
    handleSubmit,
  };
};
