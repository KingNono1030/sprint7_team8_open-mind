import { useState } from 'react';

export const useDropdown = (options = []) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const selectOption = (option) => {
    setSelectedOption(option);
  };

  return {
    selectedOption,
    selectOption,
  };
};
