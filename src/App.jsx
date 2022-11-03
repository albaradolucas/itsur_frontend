// Libraries
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout
import AuthLayout from "./layout/AuthLayout";

// Páginas Públicas
import Inicio from "./paginas/publicas/Inicio";
import Productos from "./paginas/publicas/Productos";
import HardSoft from "./paginas/publicas/HardSoft";
import PostVenta from "./paginas/publicas/PostVenta";
import Contacto from "./paginas/publicas/Contacto";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				{/* área pública */}
				<Route path="/" element={<AuthLayout/>}>
					<Route index element={<Inicio />} />
					<Route path="productos" element={<Productos />} />
					<Route path="hardsoft" element={<HardSoft />} />
					<Route path="post_venta" element={<PostVenta />} />
					<Route path="contacto" element={<Contacto />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
