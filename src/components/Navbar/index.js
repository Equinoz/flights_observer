import { useLayoutEffect, useState } from "react";

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

	function useWindowWidth() {
		const [width, setWidth] = useState(window.innerWidth < 780);
		useLayoutEffect(() => {
			function updateSize() {
				setWidth(window.innerWidth < 780);
			}
			window.addEventListener('resize', updateSize);
			updateSize();
			return () => window.removeEventListener('resize', updateSize);
		});
		return [width];
	}

	const toggleNavbar = () => {
		setDisplayNavbar(!displayNavbar);
	}

	const [widthMobile] = useWindowWidth();
	const [displayNavbar, setDisplayNavbar] = useState(false);

	return (
		<div className="navbar" style={{ width: (!widthMobile || displayNavbar ? "18rem" : "4rem") }} >
			{ !displayNavbar && widthMobile && <div className="navbar--mobile">
				<ul>
					<li className="search-button">
						<i onClick={ toggleNavbar } className="fa fa-2x fa-search"></i>
					</li>
					{ buttons.map((button, index) => <li key={ index }>
						<i className={ "fa fa-lg fa-" + button.icon }></i>
					</li>) }
				</ul>
			</div> }

			{ (displayNavbar || !widthMobile) && <div className="navbar--desktop">
				{ widthMobile && <i onClick={ toggleNavbar } className="back-arrow fas fa-3x fa-arrow-alt-circle-left"></i> }
				<p>Search flights</p>
				<p>by...</p>
				<ul>
					{ buttons.map((button, index) => <ButtonNavbar
						key={ index }
						icon={ button.icon }
						text={ button.text }
					/>) }
				</ul>
			</div> }
		</div>
	);
}

export default Navbar;
