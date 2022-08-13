import { StyledButton } from "./style.jsx";

export default function Button(options) {
  return <StyledButton {...options}>{options.children}</StyledButton>;
}
