import "./flight.scss";

const Flight = ({ state }) => {
	const lastContact = () => `${ new Date(state[4] * 1000).toISOString().slice(0, 16).replace("T", " ") } GMT`

	return (
		<div className="flight">
			<h3>Flight n°<span>{ state[0] }</span></h3>
			<p><i className="fas fa-plane"></i>Aircraft identifiant: { state[1] }</p>
			<p><i className="fas fa-flag"></i>Origin country: { state[2] }</p>
			<div className="position">
				<i className="fas fa-globe"></i>
				<div>
					<p>Longitude: { state[5].toFixed(2) }°</p>
					<p>Latitude: { state[6].toFixed(2) }°</p>
					<p>Altitude: { state[13] == null ? "on the ground" : parseInt(state[13], 10) + " m"}</p>
				</div>
			</div>
			<p><i className="fas fa-tachometer-alt"></i>Speed: { parseInt(state[9] * 3.6, 10) } km/H</p>
			<p><i className="fas fa-headset"></i>Last contact at: { lastContact() }</p>
		</div>
	);
}

export default Flight;
