// Libraries
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout
import AuthLayout from "./layout/AuthLayout";

// Páginas Públicas
import Inicio from "./paginas/publicas/Inicio";
import Contacto from "./paginas/publicas/Contacto";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				{/* área pública */}
				<Route path="/" element={<AuthLayout/>} />
				<Route index element={<Inicio />} />
				<Route path="contacto" element={<Contacto />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
