import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Ingredients from "./components/Ingredients/Ingredients";
import Instructions from "./components/Instructions/Instructions";
import Main from "./components/Main";
import Nutrition from "./components/Nutrition/Nutrition";
import Thumb from "./components/Thumb/Thumb";

function App() {
	return (
		<div className="app">
			<Thumb />
			<Header />
			<Main>
				<Ingredients />
				<Instructions />
				<Nutrition />
			</Main>
			<Footer />
		</div>
	);
}

export default App;
