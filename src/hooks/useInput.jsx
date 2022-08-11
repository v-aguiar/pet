import { useState } from "react";

import { StyledInput } from "../components/Input/style.jsx";

export default function useInput(options) {
  const [value, setValue] = useState("");
  const input = <StyledInput value={value} onChange={(e) => setValue(e.target.value)} {...options} />;

  return [value, input];
}
