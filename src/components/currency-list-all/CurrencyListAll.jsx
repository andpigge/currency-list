import { useCurrency } from "../currency.context";
import { CurrencyAllItem } from "./currency-all-item";

export const CurrencyListAll = ({ charCode }) => {
  const currencyAll = useCurrency();

  return (
    <ul className="currency__list">
      <div className="currencyAllItem">
        <p className="currencyAllItem__text">Дата</p>
        <p className="currencyAllItem__text">Текущее</p>
        <p className="currencyAllItem__text">Предедущее</p>
      </div>
      {currencyAll.map((item, i) => {
        const currency = item[charCode];
        return (
          <li className="currency__item" key={currency.id + i}>
            <CurrencyAllItem
              currency={{
                date: currency.date,
                value: currency.value,
                percent: currency.percent,
                growth: currency.growth,
              }}
            />
          </li>
        );
      })}
    </ul>
  );
};
