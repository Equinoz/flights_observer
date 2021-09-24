import { FETCH_DATAS } from "./actions";

const initialState = {
	datasFetched: false,
	flights: []
};

const reducer = (oldState = initialState, action) => {
	switch (action.type) {
		case FETCH_DATAS:
			const flights = (action.payload.flights !== undefined) ? action.payload.flights : [];
			return {
				...oldState,
				datasFetched: true,
				flights
			};

		default:
			return {
				...oldState
			};
	}
};

export default reducer;