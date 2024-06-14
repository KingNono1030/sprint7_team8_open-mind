import { useState, useCallback } from 'react';

export default function useToggle(initialState = false) {
  const [isToggled, setIsToggled] = useState(initialState);
  const toggle = useCallback(() => setIsToggled((prevState) => !prevState), []);

  return [isToggled, toggle];
}
