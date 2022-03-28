import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import MovieSelect from "./components/MovieSelect";
import TimeSelect from "./components/TimeSelect";
import SeatSelect from "./components/SeatSelect";
import Order from "./components/Order";

import { useParams } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
            <Header />
			<Routes>
                <Route path="/" element={<MovieSelect />} />
				<Route path="/sessoes/:idFilme" element={<TimeSelect />} />
				<Route path="/assentos/:idSessao" element={<SeatSelect />} />
				<Route path="/sucesso" element={<Order />} />
			</Routes>
		</BrowserRouter>
	);
}

ReactDOM.render(<App />, document.querySelector(".root"));