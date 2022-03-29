import "./listItem.css";

export const ListItem = ({ currency }) => {
  const { charCode, percent, value, growth } = currency;

  return (
    <div className="currencyItem">
      <p className="currencyItem__text">{charCode}</p>
      <p className="currencyItem__text currencyItem__text_position_center">
        {value} &#8381;.
      </p>
      <p className="currencyItem__text currencyItem__text_position_right">
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
