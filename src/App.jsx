// Libraries
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout
import AuthLayout from "./layout/AuthLayout";

// Provider
import { AuthProvider } from "./context/AuthProvider";

// Páginas Públicas
import Inicio from "./paginas/publicas/Inicio";
import Productos from "./paginas/publicas/Productos";
import HardSoft from "./paginas/publicas/HardSoft";
import PostVenta from "./paginas/publicas/PostVenta";
import Contacto from "./paginas/publicas/Contacto";
import Registrar from "./paginas/publicas/Registrar";
import ConfirmarCuenta from "./paginas/publicas/ConfirmarCuenta";
import IniciarSesion from "./paginas/publicas/IniciarSesion";
import OlvidePassword from "./paginas/publicas/OlvidePassword";
import NuevoPassword from "./paginas/publicas/NuevoPassword";

function App() {
	return (
		<BrowserRouter>
			<AuthProvider>
				<Routes>
					{/* área pública */}
					<Route path="/" element={<AuthLayout />}>
						<Route index element={<Inicio />} />
						<Route path="productos" element={<Productos />} />
						<Route path="hardsoft" element={<HardSoft />} />
						<Route path="post_venta" element={<PostVenta />} />
						<Route path="contacto" element={<Contacto />} />
						<Route path="registrar" element={<Registrar />} />
						<Route
							path="confirmar/:id"
							element={<ConfirmarCuenta />}
						/>
						<Route path="login" element={<IniciarSesion />} />
						<Route
							path="olvide-password"
							element={<OlvidePassword />}
						/>
						<Route
							path="olvide-password/:token"
							element={<NuevoPassword />}
						/>
					</Route>
				</Routes>
			</AuthProvider>
		</BrowserRouter>
	);
}

export default App;
