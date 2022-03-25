import { sortByCharCode } from "../../shared/helpers/sortArray";
import { CurrencyItem } from "./currency-item";
import "./currencyList.css";

export const CurrencyList = ({ currencyToday }) => (
  <div className="currency">
    <ul className="currency__list">
      {sortByCharCode(Object.values(currencyToday)).map((item) => {
        return (
          <li className="currency__item">
            <CurrencyItem key={item.ID} currency={item} />
          </li>
        );
      })}
    </ul>
  </div>
);
