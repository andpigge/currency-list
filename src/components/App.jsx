import { useState, useEffect } from "react";

import "./app.css";
import { fetcher } from "../shared/fetcher";
import { initGet } from "../shared/constants/response-init";
import { sortByDate } from "../shared/helpers/sortArray";
import { CurrencyList } from './currency-list';

export const App = () => {
  const [currencyAll, setCurrencyAll] = useState([]);
  const [currencyToday, setCurrencyToday] = useState({});

  useEffect(() => {
    let count = 0;

    const getCurrency = (initGet) => {
      fetcher(initGet)
      .then((json) => {
        setCurrencyAll((state) => {
          const newState = state.slice(0);
          newState.push(json);
          return newState;
        });
        count++;

        if (count < 10) {
          return getCurrency({ ...initGet, path: json.PreviousURL });
        }
      })
    };

    getCurrency(initGet);
  }, []);

  useEffect(() => {
    if (currencyAll.length === 10) {
      setCurrencyAll(sortByDate(currencyAll));
      setCurrencyToday(currencyAll[0].Valute);
    }
  }, [currencyAll]);

  return (
    <main className='main'>
      <CurrencyList currencyToday={currencyToday} />
    </main>
  );
}
