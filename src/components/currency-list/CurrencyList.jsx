import { ListItem } from "../ui/list-Item";
import { useCurrency } from "../currency.context";
import "./currencyList.css";
import React from "react";

export const CurrencyList = ({ cb, currencyAll }) => {
  const value = useCurrency();

  console.log(currencyAll);

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
                <ListItem currency={item} />
              </li>
              {item.selected && (
                <ul className="currency__list">
                  <div className="currencyItem">
                    <p className="currencyItem__text">Дата</p>
                    <p className="currencyItem__text currencyItem__text_position_center">
                      Текущее
                    </p>
                    <p className="currencyItem__text currencyItem__text_position_right">
                      Предедущее
                    </p>
                  </div>
                  {currencyAll.map((i) => {
                    console.log(i[item.charCode]);
                    return (
                      <li className="currency__item">
                        <div className="currencyItem">
                          <p className="currencyItem__text">
                            {i[item.charCode].date}
                          </p>
                          <p className="currencyItem__text currencyItem__text_position_center">
                            {i[item.charCode].value} &#8381;.
                          </p>
                          <p className="currencyItem__text currencyItem__text_position_right">
                            {i[item.charCode].percent} %
                            {i[item.charCode].growth ? (
                              <span style={{ color: "green" }}>▲</span>
                            ) : (
                              <span style={{ color: "red" }}>▼</span>
                            )}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              )}
            </React.Fragment>
          );
        })}
      </ul>
    </section>
  );
};
