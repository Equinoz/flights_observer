import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import "./details.scss";

const Details = ({ flights }) => {
	// TODO ajouter un lien vers l'accueil
	// TODO Gérer l'absence de coordonnées
	// TODO responsive
	// TODO ajouter icone avion

	const { flightId } = useParams();
	const flight = flights.find(flight => flight[0] === flightId);

	const lastContact = () => `${ new Date(flight[4] * 1000).toISOString().slice(0, 16).replace("T", " ") } GMT`
	const verticalRate = () => {
		if (flight[11] > 0) {
			return "climbing";
		}
		else if (flight[11] < 0) {
			return "descending";
		}
		else {
			return "horizontal";
		}
	}

	return(
		<div className="details">
			<div className="flight-details">
				<div className="map">
					<iframe title="map" src={ `https://www.google.com/maps/embed/v1/view?key=${ process.env.REACT_APP_MAPS_EMBED_API_KEY }&center=${ flight[6] }, ${ flight[5] }&zoom=5` } width="800" height="350" aria-hidden="false"></iframe>
				</div>
				<h2>Flight n°{ flight[0] }</h2>
				<div className="flight_informations">
					<div>
						<p>Origin country: <span>{ flight[2] }</span></p>
						<p>Longitude: <span>{ flight[5] === null ? "no data" : flight[5].toFixed(2) + "°" }</span></p>
						<p>Latitude: <span>{ flight[6] === null ? "no data" : flight[6].toFixed(2) + "°" }</span></p>
						<p>Altitude: <span>{ flight[13] === null ? "on the ground" : parseInt(flight[13], 10) + " m" }</span></p>
					</div>
					<div>
						<p>Vertical rate: <span>{ verticalRate() }</span></p>
						<p>True track from north: <span>{ flight[10] === null ? "no data" : flight[10] + "°" }</span></p>
						<p>Speed: <span>{ parseInt(flight[9] * 3.6, 10) } km/H</span></p>
						<p>Last contact at: <span>{ lastContact() }</span></p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default connect(
	state => {
    return {
      flights: state.flights
    }
  }
)(Details);