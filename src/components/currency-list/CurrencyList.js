import { CurrencyItem } from "./currency-item";
import { useCurrency } from "../currency.context";
import "./currencyList.css";

export const CurrencyList = () => {
  const value = useCurrency();
  console.log(value);

  return (
    <section className="currency main__margin-auto">
      <ul className="currency__list">
        <div className="currencyItem">
          <p className="currencyItem__text">Валюта</p>
          <p className="currencyItem__text currencyItem__text_position_center">
            Текущее
          </p>
          <p className="currencyItem__text currencyItem__text_position_right">
            Предедущее
          </p>
        </div>
        {value.map((item) => {
          return (
            <li className="currency__item" key={item.id}>
              <CurrencyItem currency={item}/>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
