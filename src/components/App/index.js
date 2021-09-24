import { connect } from "react-redux";

import Modal from "../Modal";
import Home from "../Home";

const App = ({ showModal }) => <>
	{ showModal && <Modal /> }
  <Home />
</>;

export default connect(
	state => {
    return {
			showModal: state.showModal
    }
  }
)(App);