import swal from "@sweetalert/with-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import clienteAxios from "../../config/axios";

const Registrar = () => {
	// States
	const [nombre, setNombre] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [repetirPassword, setRepetirPassword] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();

		if ([nombre, email, password, repetirPassword].includes("")) {
			swal({
				title: "Campos vacíos!",
				text: "Todos los campos son obligatorios",
				icon: "error",
				button: "Entendido!",
			});
			return;
		}

		if (password !== repetirPassword) {
			swal({
				title: "Contraseñas Diferentes!",
				text: "Las contraseñas no son iguales, por favor revisa",
				icon: "error",
				button: "Entendido!",
			});
			return;
		}

		if (password.length < 6) {
			swal({
				title: "Contraseña muy corta!",
				text: "Agrega al mínimo 6 caracteres",
				icon: "error",
				button: "Entendido!",
			});
			return;
		}

		// Crear el usuario en la api
		try {
			await clienteAxios.post("/registrar", { nombre, email, password });
			swal({
				title: "Usuario creado",
				text: "Revisa tu email! Te hemos enviado instrucciones.",
				icon: "success",
				button: "OK!",
			});
		} catch (error) {
			swal({
				text: "Usuario ya registrado",
				icon: "error",
				button: "Entendido!",
			});
		}
	};

	return (
		<>
			<main className="container mx-auto md:grid md:grid-cols-2 p-3 mb-3 items-center">
				<div>
					<h1 className="text-orange-400 font-black text-4xl">
						Crea tu Cuenta {""}
						<span className="text-black">
							y empieza tu camino en ITSur.
						</span>
					</h1>
				</div>
				<div className="mt-10 md:mt-5 shadow-lg px-3 py-1 rounded-xl bg-white">
					<form onSubmit={handleSubmit}>
						<div className="my-5">
							<label className="uppercase text-gray-600 block text-xl font-bold">
								Nombre:
							</label>
							<input
								type="text"
								placeholder="¿Cuál es tu nombre?"
								className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
								value={nombre}
								onChange={(e) => setNombre(e.target.value)}
							/>
						</div>
						<div className="my-5">
							<label className="uppercase text-gray-600 block text-xl font-bold">
								Email:
							</label>
							<input
								type="email"
								placeholder="¿Cuál es tu email?"
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
								placeholder="+6 Caracteres"
								className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
						<div className="my-5">
							<label className="uppercase text-gray-600 block text-xl font-bold">
								Repite tu contraseña:
							</label>
							<input
								type="password"
								placeholder="Ingresa tu contraseña nuevamente"
								className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
								value={repetirPassword}
								onChange={(e) =>
									setRepetirPassword(e.target.value)
								}
							/>
						</div>
						<input
							type="submit"
							value="Crear Cuenta"
							className="bg-orange-400 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-2 hover:cursor-pointer hover:bg-orange-600 md:w-auto"
						/>
					</form>

					<nav className="mt-10 lg:flex lg:justify-between">
						<Link
							to="/login"
							className="block text-center my-5 text-gray-500 hover:text-gray-600"
						>
							¿Ya tienes una cuenta? Inicia Sesión
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

export default Registrar;
