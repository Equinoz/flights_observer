import { connect } from "react-redux";
import { useLayoutEffect, useState } from "react";

import ButtonNavbar from "../ButtonNavbar";
import { OPEN_MODAL } from "../../store/actions";

import "./navbar.scss";

// TODO: style "disabled" à supprimer
const Navbar = ({ openModal }) => {
	// TODO exporter l'objet "buttons" et toute la logique liée à la modale
	const selectArea = () => {
		openModal();
	};

	const buttons = [
		{ icon: "globe", text: "Area", disabled: false, onClick: selectArea },
		{ icon: "clock", text: "Time interval", disabled: true },
		{ icon: "plane-departure", text: "Departures by airport", disabled: true },
		{ icon: "plane-arrival", text: "Arrivals by airport", disabled: true },
		{ icon: "plane", text: "Aircraft", disabled: true }
	];

	// Custom hook used to determine window width. Return boolean value
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
			{/* Navbar collapsed when not displayed or window width less than 780px */}
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

			{/* Navbar expanded when displayed or window width greater than or equal to 780px */}
			{ (displayNavbar || !widthMobile) && <div className="navbar--desktop">
				{ widthMobile && <i onClick={ toggleNavbar } className="back-arrow fas fa-3x fa-arrow-alt-circle-left"></i> }
				<p>Search flights</p>
				<p>by...</p>
				<ul>
					{ buttons.map((button, index) => <ButtonNavbar
						key={ index }
						icon={ button.icon }
						text={ button.text }
						disabled={ button.disabled }
						onClick={ button.onClick }
					/>) }
				</ul>
			</div> }
		</div>
	);
}

export default connect(
	null,
	dispatch => {
    return {
			openModal: () => {
				dispatch({ type: OPEN_MODAL });
			}
    }
  }
)(Navbar);
