import { StyledCharacteristic } from "./style.jsx";

export default function Characteristic({ blockKey, blockValue }) {
  return (
    <StyledCharacteristic>
      <p>{blockValue}</p>
      <small>{blockKey}</small>
    </StyledCharacteristic>
  );
}
