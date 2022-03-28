import { CurrencyItem } from "./currency-item";
import { useCurrency } from "../currency.context";
import "./currencyList.css";
import React from 'react';

export const CurrencyList = ({ cb }) => {
  const value = useCurrency();

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
            <React.Fragment key={item.id}>
              <li
                className="currency__item currency__item_background_selected"
                onClick={() => cb(item)}
              >
                <CurrencyItem currency={item} />
              </li>
              {item.selected && <h1>1</h1>}
            </React.Fragment>
          );
        })}
      </ul>
    </section>
  );
};
