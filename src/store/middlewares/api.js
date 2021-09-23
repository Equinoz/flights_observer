import axios from "axios";

import { FETCH_DATAS, fetchData as fetchDataAction } from "../actions";

const apiMW = _ => next => async action => {
	if (action.type === FETCH_DATAS) {
		try {
			const res = await axios.get("https://opensky-network.org/api/states/all?lamin=45.8389&lomin=5.9962&lamax=47.8229&lomax=10.5226");
			const flights = res.data.states.slice(0,20);
			action = fetchDataAction(flights);
		}
		catch (err) {
			console.error(err);
		}
	}

	next(action);
};

export default apiMW;