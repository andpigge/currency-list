import "./currencyAllItem.css";

export const CurrencyAllItem = ({ currency }) => {
  const { date, percent, value, growth } = currency;

  return (
    <div className="currencyAllItem">
      <p className="currencyAllItem__text">{date}</p>
      <p className="currencyAllItem__text currencyAllItem__text_position_center">
        {value} &#8381;.
      </p>
      <p className="currencyAllItem__text currencyAllItem__text_position_right">
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
