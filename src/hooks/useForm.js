import { useState } from 'react';

export const useForm = (initialValue = '') => {
  const [value, setValue] = useState(initialValue);
  const handleChange = (e) => {
    const nextValue = e.target.value;
    setValue((prevValue) => nextValue);
  };

  const handleSubmit = (callback) => async (e) => {
    e.preventDefault();
    const result = await callback(value);
    setValue('');
    const { id } = result;
  };

  return {
    value,
    handleChange,
    handleSubmit,
  };
};
