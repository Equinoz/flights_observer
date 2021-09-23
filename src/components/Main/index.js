import Flight from "../Flight";

import "./main.scss";

import data from "../data.js";

const Main = () => {
	const dummiesData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];

	return (
		<div className="main">
			<div className="container">
				{ dummiesData.map(i => <Flight state={ data.state } />) }
			</div>
		</div>
	);
};

export default Main;
