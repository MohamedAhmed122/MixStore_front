import { useState } from "react";

export const useToggle = () => {
  const [value, setValue] = useState(false);

  const toggleButton = () => setValue(!value);

  return { value, toggleButton };
};
