import ButtonNavbar from "../ButtonNavbar";

import "./navbar.scss";

const Navbar = () => {
	const buttons = [
		{ icon: "globe", text: "Area" },
		{ icon: "clock", text: "Time interval" },
		{ icon: "plane-departure", text: "Departures by airport" },
		{ icon: "plane-arrival", text: "Arrivals by airport" },
		{ icon: "plane", text: "Aircraft" }
	];

	return (
		<div className="navbar">
			<div className="navbar--desktop">
				<p>Search flights</p>
				<p>by...</p>
				<ul>
					{ buttons.map((button, index) => <ButtonNavbar
						key={ index }
						icon={ button.icon }
						text={ button.text }
					/>) }
				</ul>
			</div>
		</div>
	);
}

export default Navbar;
