export const FETCH_DATAS = "FETCH_DATAS";

export const fetchData = (flights) => ({
	type: FETCH_DATAS,
	payload: {
		flights
	}
});
