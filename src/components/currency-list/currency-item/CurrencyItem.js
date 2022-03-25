import './currencyItem.css';

export const CurrencyItem = ({ currency }) => {
  return (
    <div className="currencyItem">
      {currency.CharCode} - {(currency.Value / currency.Nominal).toFixed(3)} руб
    </div>
  );
};
