import { useState, useEffect } from "react";

import { fetcher } from "../shared/fetcher";
import { initGet } from "../shared/constants/response-init";

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

  const sortByDate = (array) => {
    return array.sort((a, b) => {
      return new Date(b.Date) - Date(a.Date);
    });
  };

  const sortByCharCode = (array) => {
    return array.sort((a, b) => {
      return a.CharCode.localeCompare(b.CharCode);
    });
  };

  useEffect(() => {
    if (currencyAll.length === 10) {
      setCurrencyAll(sortByDate(currencyAll));
      setCurrencyToday(currencyAll[0].Valute);
    }
  }, [currencyAll]);

  return (
    <div>
      {sortByCharCode(Object.values(currencyToday)).map((item) => {
        return (
          <p key={item.ID}>
            {item.CharCode} - {(item.Value / item.Nominal).toFixed(3)} руб
          </p>
        );
      })}
    </div>
  );
}
