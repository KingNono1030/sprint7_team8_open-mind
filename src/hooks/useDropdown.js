import { useState, useCallback } from 'react';

export default function useDropdown(options, onOrderChange) {
  const [selectedOption, setSelectedOption] = useState(options[1]);
  const selectOption = useCallback(
    (option) => {
      setSelectedOption(option);
      if (onOrderChange) {
        onOrderChange(option);
      }
    },
    [onOrderChange]
  );

  return {
    selectedOption,
    selectOption,
  };
}
