import { useState, useId } from "react";
import { TabButton, StyledButtonGroup } from "./style.jsx";

export default function ButtonGroup({ buttons, callback }) {
  const [clickedId, setClickedId] = useState(-1);

  const handleClick = (e, id) => {
    setClickedId(id);
    callback(e);
  };

  return (
    <StyledButtonGroup>
      {buttons.map((buttonLabel) => {
        const id = useId();
        return (
          <TabButton
            key={id}
            name={buttonLabel}
            onClick={(event) => handleClick(event, id)}
            className={id === clickedId ? "customButton active" : "customButton"}
            type="button"
          >
            {buttonLabel}
          </TabButton>
        );
      })}
    </StyledButtonGroup>
  );
}
