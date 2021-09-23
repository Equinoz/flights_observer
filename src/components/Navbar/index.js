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

	const widthMobile = window.innerWidth < 780;
	const displayMobile = window.innerWidth < 780;

	return (
		<div className="navbar" >
			{displayMobile && <div className="navbar--mobile">
				<ul>
					<li className="search-button">
						<i className="fa fa-2x fa-search"></i>
					</li>
					{buttons.map((button, index) => <li key={index}>
						<i className={"fa fa-lg fa-" + button.icon}></i>
					</li>)}
				</ul>
			</div>}

			{!displayMobile && <div className="navbar--desktop">
				{ widthMobile && <i className="back-arrow fas fa-3x fa-arrow-alt-circle-left"></i> }
				<p>Search flights</p>
				<p>by...</p>
				<ul>
					{buttons.map((button, index) => <ButtonNavbar
						key={index}
						icon={button.icon}
						text={button.text}
					/>)}
				</ul>
			</div>}
		</div>
	);
}

export default Navbar;
