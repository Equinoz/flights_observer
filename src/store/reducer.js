import { FETCH_DATAS } from "./actions";

const initialState = {
	datasFetched: false,
	flights: []
};

const reducer = (oldState = initialState, action) => {
	switch (action.type) {
		case FETCH_DATAS:
			return {
				...oldState,
				datasFetched: true,
				flights: action.payload.flights
			};

		default:
			return {
				...oldState
			};
	}
};

export default reducer;