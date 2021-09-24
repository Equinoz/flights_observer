export const FETCH_DATAS = "FETCH_DATAS";
export const CLOSE_MODAL = "CLOSE_MODAL";
export const OPEN_MODAL = "OPEN_MODAL";

export const fetchData = flights => ({
	type: FETCH_DATAS,
	payload: {
		flights
	}
});
