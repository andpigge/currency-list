import { CurrencyItem } from "./currency-item";
import { CurrencyListAll } from "../currency-list-all";
import { useCurrency } from "../currency.context";
import "./currencyList.css";
import React from "react";

export const CurrencyList = ({ currencyAll, cb }) => {
  const value = useCurrency();

  return (
    <section className="currency main__margin-auto">
      <ul className="currency__list">
        <div className="currencyTitle">
          <p className="currencyTitle__desc">Валюта</p>
          <p className="currencyTitle__desc currencyItem__desc_position_center">
            Текущее
          </p>
          <p className="currencyTitle__desc currencyItem__desc_position_right">
            Предедущее
          </p>
        </div>
        {value.map((item) => {
          return (
            <React.Fragment key={item.id}>
              <li className="currency__item currency__item_background_selected">
                <>
                  <CurrencyItem currency={item} cb={cb} />
                  {item.selected && (
                    <CurrencyListAll
                      currencyAll={currencyAll}
                      charCode={item.charCode}
                    />
                  )}
                </>
              </li>
            </React.Fragment>
          );
        })}
      </ul>
    </section>
  );
};
