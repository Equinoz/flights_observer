import Navbar from "../Navbar";
import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";

import "./home.scss";

const Home = () => <div className="home">
	<nav>
		<Navbar />
	</nav>
	<section>
		<Header />
		<Main />
		<Footer />
	</section>
</div>;

export default Home;