import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import RoutesApp from "./routes/routes";

//Componentes
import Home from "./pages/home/Home.page";
import CrearPadrino from "./pages/crearPadrino/CrearPadrino.page";
import SolicitarPadrino from "./pages/solicitarPadrino/SolicitarPadrino.page";

//Estilos
import "./App.css";

function App() {

	return (
		<BrowserRouter>
			<Routes>
				<Route path={RoutesApp.Home} element={<Home />} />
				<Route path={RoutesApp.CrearPerfilPadrino} element={<CrearPadrino />} />
				<Route
					path={RoutesApp.SolicitarPadrino}
					element={<SolicitarPadrino />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
