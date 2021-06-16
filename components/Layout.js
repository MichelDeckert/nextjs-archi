import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
	return (
		<div className="app">
			<Navbar />
			<div className="content">{children}</div>
			<Footer />
		</div>
	);
}
