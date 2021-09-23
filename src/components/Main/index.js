import { connect } from "react-redux";

import Flight from "../Flight";

import "./main.scss";

const Main = ({ datasFetched, flights }) => {

	return (
		<div className="main">
			{ datasFetched ?
				<div className="container">
					{ flights.map((flight, index) => <Flight key={ index } state={ flight } />) }
				</div> :
				<div className="fetch-datas">
					<div className="loader">
						<div className="loader-animation" />
					</div>
					<p>Please wait a few seconds...</p>
				</div>
			}
		</div>
	);
};

export default connect(
	state => {
    return {
			datasFetched : state.datasFetched,
      flights: state.flights,
    }
  }
)(Main);
