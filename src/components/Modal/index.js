// TODO contrôler champs
// TODO validation formulaire
// TODO permettre la customisation de la modale selon les options choisies
// TODO responsive

import { connect } from "react-redux";
import { CLOSE_MODAL } from "../../store/actions";

import "./modal.scss";

const Modal = ({ closeModal }) => {
	return (
		<div className="modal">
			<div className="modal-window">
				<div className="close-modal"><i onClick={ closeModal } className="fas fa-2x fa-times"></i></div>
				<form>
					<h2>Enter the area's coordinates</h2>
					<div className="group-input">
						<div className="input">
							<label>Maximum latitude (in degrees)</label>
							<input
								type="number"
							/>
						</div>
						<div className="input">
							<label>Minimum latitude (in degrees)</label>
							<input
								type="number"
							/>
						</div>
					</div>
					<div className="group-input">
						<div className="input">
							<label>Maximum longitude (in degrees)</label>
							<input
								type="number"
							/>
						</div>
						<div className="input">
							<label>Minimum longitude (in degrees)</label>
							<input
								type="number"
							/>
						</div>
					</div>
					<button className="submit-button" type="submit" onClick={ (e) => { e.preventDefault(); closeModal(); } }>Search</button>
				</form>
			</div>
		</div>
	);
};


export default connect(
	null,
	dispatch => {
    return {
			closeModal: () => {
				dispatch({ type: CLOSE_MODAL });
			}
    }
  }
)(Modal);