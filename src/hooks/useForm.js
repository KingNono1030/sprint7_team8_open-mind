import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useForm = (initialValue = '') => {
  const navigate = useNavigate();
  const [value, setValue] = useState(initialValue);
  const handleChange = (e) => {
    const nextValue = e.target.value;
    setValue((prevValue) => nextValue);
  };

  const handleSubmit = (callback) => async (e) => {
    e.preventDefault();
    const result = await callback(value);
    setValue('');
    const { id } = await result;
    console.log(id);
    navigate(`/post/${id}`);
  };

  return {
    value,
    handleChange,
    handleSubmit,
  };
};
