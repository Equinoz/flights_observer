import { connect } from "react-redux";

import Flight from "../Flight";

import "./main.scss";

const Main = ({ flights }) => {

	return (
		<div className="main">
			<div className="container">
				{ flights.map((flight, index) => <Flight key={ index } state={ flight } />) }
			</div>
		</div>
	);
};

export default connect(
	state => {
    return {
      flights: state.flights,
    }
  }
)(Main);
