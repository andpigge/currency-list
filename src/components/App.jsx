import { useState, useEffect } from "react";

import "./app.css";
import { CurrencyList } from './currency-list';
import { CurrencyProvider } from "./currency.context";
import { sortArray } from "../shared/helpers/sortArray";

export const App = ({ data }) => {
  const [currencyAll, setCurrencyAll] = useState([]);
  const [currencyToday, setCurrencyToday] = useState([]);

  const createNewArr = (obj, cb) => {
    const newArr = [];
    for (let key in obj) {
      const newObj = cb(key);
      newArr.push(newObj);
    }
    return newArr;
  };

  const createNewObj = (obj, cb) => {
    const newObj = {};
    for (let key in obj) {
      cb(newObj, key);
    }
    return newObj;
  };

  // TODO Создать функцию помошник для вычисления даты
  // TODO Добавить еще один провайдер, контекст для все валют
  useEffect(() => {
    const arr = [];
    data.forEach(item => {
      const currencyAll = createNewObj(item.Valute, (newObj, key) => {
        const obj = item.Valute[key];
        const percent = `${((obj.Value / obj.Previous) * 100 - 100).toFixed(3)}`;

        newObj[key] = {
          value: obj.Value.toFixed(3),
          id: obj.ID,
          percent,
          date: item.Date.slice(0, 10),
          growth: obj.Value > obj.Previous,
        };
      });
      arr.push(currencyAll);

      const currencyToday = createNewArr(item.Valute, (key) => {
        const obj = item.Valute[key];
        const percent = `${((obj.Value / obj.Previous) * 100 - 100).toFixed(3)}`;
        return {
          id: obj.ID,
          charCode: obj.CharCode,
          name: obj.Name,
          value: obj.Value.toFixed(3),
          percent,
          selected: false,
          growth: obj.Value > obj.Previous,
        };
      });
      setCurrencyToday(sortArray(currencyToday, "charCode"));
    });
    setCurrencyAll(arr);
  }, [data]);

  const toggleSelected = (item) => {
    const newState = currencyToday.reduce((acc, i) => {
      if (i.id === item.id) {
        i.selected = !i.selected;
      }
      else if (i.selected === true) {
        i.selected = false;
      }
      acc.push(i);
      return acc;
    }, []);

    setCurrencyToday(newState);
  };

  return (
    <main className="main">
      {
        <>
          <h1>2022-03-26</h1>
          <CurrencyProvider value={currencyToday}>
            <CurrencyList currencyAll={currencyAll} cb={toggleSelected} />
          </CurrencyProvider>
        </>
      }
    </main>
  );
}
