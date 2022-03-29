import { CurrencyAllItem } from "../ui/currency-all-item";
import "./currencyListAll.css";

export const CurrencyListAll = ({ currencyAll, charCode }) => (
  <ul className="currency__list">
    <div className="currencyTitle">
      <p className="currencyTitle__desc">Дата</p>
      <p className="currencyTitle__desc currencyItem__desc_position_center">
        Текущее
      </p>
      <p className="currencyTitle__desc currencyItem__desc_position_right">
        Предедущее
      </p>
    </div>
    {currencyAll.map((item) => {
      const currency = item[charCode];
      return (
        <li className="currency__item">
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
