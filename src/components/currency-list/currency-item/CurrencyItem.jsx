import { useState } from "react";
import { Tooltip } from "../../ui/tooltip";
import "./currencyItem.css";

export const CurrencyItem = ({ currency, cb }) => {
  const { charCode, percent, value, growth, selected, name } = currency;

  const [tooltip, setTooltip] = useState(false);

  const classText = `currencyItem__text ${
    selected ? "currencyItem__text_item_selected" : ""
  }`;

  const toggleTooltip = () => {
    setTooltip(state => !state);
  };

  return (
    <div
      className={`currencyItem ${selected && "currencyItem_item_selected"}`}
      onClick={() => cb(currency)}
      onMouseEnter={toggleTooltip}
      onMouseLeave={toggleTooltip}
    >
      <p className={classText}>{charCode}</p>
      <p className={`${classText} currencyItem__text_position_center`}>
        {value} &#8381;.
      </p>
      <p className={`${classText} currencyItem__text_position_right`}>
        {percent} %
        {growth ? (
          <span style={{ color: "green" }}>▲</span>
        ) : (
          <span style={{ color: "red" }}>▼</span>
        )}
      </p>
      { tooltip && <Tooltip text={name} /> }
    </div>
  );
};
