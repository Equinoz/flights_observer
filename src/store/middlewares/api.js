import axios from "axios";

import { FETCH_DATAS, fetchData as fetchDataAction } from "../actions";

const apiMW = _ => next => async action => {
	if (action.type === FETCH_DATAS) {
		try {
			const res = await axios.get("https://opensky-network.org/api/states/all?lamin=47.081149&lomin=-4.901407&lamax=48.896081&lomax=-1.014896");
			const flights = res.data.states.slice(0,20);
			action = fetchDataAction(flights);
		}
		catch (err) {
			action = fetchDataAction([]);
		}
	}

	next(action);
};

export default apiMW;