import { useState } from "react";
import swal from "@sweetalert/with-react";
import { Link, useNavigate } from "react-router-dom";
import clienteAxios from "../../config/axios";
import useAuth from "../../hooks/useAuth";
import Alerta from "../../components/Alerta";

const IniciarSesion = () => {
	const { setAuth } = useAuth();

	// States
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [alerta, setAlerta] = useState({});

	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();

		if ([email, password].includes("")) {
			swal({
				title: "Campos vacíos!",
				text: "Todos los campos son obligatorios",
				icon: "error",
				button: "Entendido!",
			});
			return;
		}

		// Crear el usuario en la api
		try {
			const { data } = await clienteAxios.post("/login", {
				email,
				password,
			});

			sessionStorage.setItem("its_token", data.token);
			setAuth(data);
			navigate("/");
			swal({
				title: "Bienvenido de Nuevo!",
				text: "Sesión iniciada, disfruta tu estadía",
				icon: "success",
				button: "OK!",
			});
		} catch (error) {
			setAlerta({ msg: error.response.data.msg, error: true });
		}
	};

	const { msg } = alerta;

	return (
		<>
			<main className="container mx-auto md:grid md:grid-cols-2 p-3 mb-3 items-center">
				<div>
					<h1 className="text-orange-400 font-black text-4xl">
						Inicia Sesión {""}
						<span className="text-black">
							y sigue tu camino en ITSur.
						</span>
					</h1>
				</div>
				<div className="mt-10 md:mt-5 shadow-lg px-3 py-1 rounded-xl bg-white">
					{msg && <Alerta alerta={alerta} />}
					<form onSubmit={handleSubmit}>
						<div className="my-5">
							<label className="uppercase text-gray-600 block text-xl font-bold">
								Email:
							</label>
							<input
								type="email"
								placeholder="Introduce tu email"
								className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						<div className="my-5">
							<label className="uppercase text-gray-600 block text-xl font-bold">
								Contraseña:
							</label>
							<input
								type="password"
								placeholder="Introduce tu contraseña"
								className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
						<input
							type="submit"
							value="Iniciar Sesión"
							className="bg-orange-400 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-2 hover:cursor-pointer hover:bg-orange-600 md:w-auto"
						/>
					</form>

					<nav className="mt-10 lg:flex lg:justify-between">
						<Link
							to="/registrar"
							className="block text-center my-5 text-gray-500 hover:text-gray-600"
						>
							¿No tienes una cuenta? Regístrate
						</Link>
						<Link
							to="/olvide-password"
							className="block text-center my-5 text-gray-500 hover:text-gray-600"
						>
							Olvidé mi contraseña
						</Link>
					</nav>
				</div>
			</main>
		</>
	);
};

export default IniciarSesion;
