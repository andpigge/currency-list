import "./currencyItem.css";

export const CurrencyItem = ({ currency }) => {
  const { charCode, percent, value, growth, selected } = currency;

  const classText = `currencyItem__text ${selected ? "currencyItem__text_item_selected" : ''}`;

  return (
    <div className={`currencyItem ${selected && "currencyItem_item_selected"}`}>
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
    </div>
  );
};
