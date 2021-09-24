import { Route } from "react-router-dom";

import Navbar from "../Navbar";
import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";
import Details from "../Details";

import "./home.scss";

const Home = () => <div className="home">
	<nav>
		<Navbar />
	</nav>
	<section>
		<Header />
		<Route exact path="/">
			<Main />
		</Route>
		<Route exact path="/flight/:flightId">
			<Details />
		</Route>
		<Footer />
	</section>
</div>;

export default Home;