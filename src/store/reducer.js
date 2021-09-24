import { FETCH_DATAS, CLOSE_MODAL, OPEN_MODAL } from "./actions";

const initialState = {
	showModal: false,
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

		case OPEN_MODAL:
			return {
				...oldState,
				showModal: true
			};

		case CLOSE_MODAL:
			return {
				...oldState,
				showModal: false
			};

		default:
			return {
				...oldState
			};
	}
};

export default reducer;