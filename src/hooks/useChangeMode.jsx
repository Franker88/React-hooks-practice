import { useState } from "react";

const useChangeMode = () => {
  const [mode, setMode] = useState(false);

  return { mode, setMode };
};

export { useChangeMode };
