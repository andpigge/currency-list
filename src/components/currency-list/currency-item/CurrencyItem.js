import './currencyItem.css';

export const CurrencyItem = ({ currency }) => {
  console.log(currency);
  const {
    CharCode,
    Value,
    Nominal,
    Previous
  } = currency;

  const sumFixed = (sum) => (sum / Nominal).toFixed(3);

  return (
    <div className="currencyItem">
      <p className="currencyItem__text">{CharCode}</p>
      <p className="currencyItem__text currencyItem__text_position_center">
        {sumFixed(Value)} &#8381;.
      </p>
      <p className="currencyItem__text currencyItem__text_position_right">
        {sumFixed(Previous)} &#8381;.{" "}
        {Value < Previous ? (
          <span style={{ color: "green" }}>▲</span>
        ) : (
          <span style={{ color: "red" }}>▼</span>
        )}
      </p>
    </div>
  );
};
