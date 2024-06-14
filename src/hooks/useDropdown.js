import { useState, useCallback } from 'react';

export const useDropdown = (options = []) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const selectOption = useCallback((option) => {
    setSelectedOption(option);
  }, []);

  return {
    selectedOption,
    selectOption,
  };
};
