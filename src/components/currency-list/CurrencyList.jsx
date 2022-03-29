import { CurrencyItem } from "./currency-item";
import { CurrencyListAll } from "../currency-list-all";
import "./currencyList.css";
import { Fragment } from "react";

export const CurrencyList = ({ currencyToday, cb }) => (
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
      {currencyToday.map((item) => {
        return (
          <Fragment key={item.id}>
            <li className="currency__item currency__item_background_selected">
              <>
                <CurrencyItem currency={item} cb={cb} />
                {item.selected && (
                  <CurrencyListAll charCode={item.charCode} />
                )}
              </>
            </li>
          </Fragment>
        );
      })}
    </ul>
  </section>
);
