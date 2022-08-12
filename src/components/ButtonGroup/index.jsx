import { useState } from "react";
import { TabButton, StyledButtonGroup } from "./style.jsx";

export default function ButtonGroup({ buttons, callback }) {
  const [clickedId, setClickedId] = useState(-1);

  const handleClick = (e, id) => {
    setClickedId(id);
    callback(e);
  };

  return (
    <StyledButtonGroup>
      {buttons.map((buttonLabel, i) => (
        <TabButton
          key={i}
          name={buttonLabel}
          onClick={(event) => handleClick(event, i)}
          className={i === clickedId ? "customButton active" : "customButton"}
          type="button"
        >
          {buttonLabel}
        </TabButton>
      ))}
    </StyledButtonGroup>
  );
}
