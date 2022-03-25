import { sortByCharCode } from "../../shared/helpers/sortArray";
import { CurrencyItem } from "./currency-item";
import "./currencyList.css";

export const CurrencyList = ({ currencyToday }) => (
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
      {sortByCharCode(Object.values(currencyToday)).map((item) => {
        return (
          <li className="currency__item" key={item.ID}>
            <CurrencyItem currency={item} />
          </li>
        );
      })}
    </ul>
  </section>
);
