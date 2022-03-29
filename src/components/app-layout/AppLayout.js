import { useEffect, useState } from 'react';
import { App } from '../App';
import { fetcher } from "../../shared/fetcher";
import { initGet } from "../../shared/constants/response-init";

export const AppLayout = () => {
	const [answer, setAnswer] = useState([]);

	useEffect(() => {
		let count = 0;
		const arr = [];

		const getCurrency = (initGet) => {
			fetcher(initGet)
			.then((json) => {
				count++;
				arr.push(json);

				if (count < 10) {
          return getCurrency({ ...initGet, path: json.PreviousURL });
        }

				setAnswer(arr);
			});
		}

		getCurrency(initGet);
	}, []);

	return <App data={answer} />;
};
