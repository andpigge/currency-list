import { useState, useEffect } from "react";

import "./app.css";
import { fetcher } from "../shared/fetcher";
import { initGet } from "../shared/constants/response-init";
import { CurrencyList } from './currency-list';
import { CurrencyProvider } from "./currency.context";
import { sortArray } from "../shared/helpers/sortArray";

export const App = () => {
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
  useEffect(() => {
    let count = 0;
    const arr = [];

    const getCurrency = (initGet) => {
      fetcher(initGet)
      .then((json) => {
        console.log(json)
        const newArr = createNewObj(json.Valute, (newObj, key) => {
          const obj = json.Valute[key];
          const percent = `${(obj.Value / obj.Previous * 100 - 100).toFixed(3)}`;

          newObj[key] = {
            value: obj.Value.toFixed(3),
            id: obj.ID,
            percent,
            date: json.Date.slice(0, 10),
            growth: obj.Value > obj.Previous,
          };
        });

        arr.push(newArr);
        count++;

        if (count === 1) {
          const newArr = createNewArr(json.Valute, (key) => {
            const obj = json.Valute[key];
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
          setCurrencyToday(sortArray(newArr, "charCode"));
        }

        if (count < 10) {
          return getCurrency({ ...initGet, path: json.PreviousURL });
        }

        setCurrencyAll(arr);
      });
    };

    getCurrency(initGet);
  }, []);

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
