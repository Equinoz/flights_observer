import { FETCH_DATAS } from "./actions";

const initialState = {
	flights: []
};

const reducer = (oldState = initialState, action) => {
	switch (action.type) {
		case FETCH_DATAS:
			return {
				...oldState,
				flights: action.payload.flights
			};

		default:
			return {
				...oldState
			};
	}
};

export default reducer;