import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Flight from "../Flight";

import "./main.scss";

const Main = ({ datasFetched, flights }) => <div className="main">
	{/* datas fetched and flights to display */}
	{ datasFetched && flights.length > 1 && <div className="container">
		{ flights.map((flight, index) => <Link to={ "/flight/" + flight[0] } key={ index } className="link">
			<Flight flight={ flight } />
		</Link>) }
	</div> }

	{/* datas fetched but no flights to display */}
	{ datasFetched && flights.length === 0 && <div className="no-datas">
		<p>No datas from API. Please change your search's settings or retry in a few seconds.</p>
	</div> }

	{/* datas not fetched yet */}
	{ !datasFetched && <div className="fetch-datas">
		<div className="loader">
			<div className="loader-animation" />
		</div>
		<p>Please wait a few seconds...</p>
	</div> }
</div>;

export default connect(
	state => {
    return {
			datasFetched: state.datasFetched,
      flights: state.flights
    }
  }
)(Main);
