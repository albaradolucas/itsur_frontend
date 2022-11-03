// Libraries
import { useState } from "react";
import { Link } from "react-router-dom";

import swal from "@sweetalert/with-react";
import clienteAxios from "../../config/axios";

const OlvidePassword = () => {
	const [email, setEmail] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (email === "" || email.length < 6) {
			swal({
				title: "Email inválido",
				text: "El email es obligatorio",
				icon: "error",
				button: "Entendido",
			});
			return;
		}

		try {
			const { data } = await clienteAxios.post("/olvide-password", {
				email,
			});

			swal({
				title: "Enviado correctamente",
				text: data.msg,
				icon: "success",
			});
		} catch (error) {
			swal({
				title: "Email inválido",
				text: error.response.data.msg,
				icon: "error",
				button: "Entendido",
			});
		}
	};

	return (
		<>
			<main className="container mx-auto md:grid md:grid-cols-2 p-3 mb-3 items-center">
				<div>
					<h1 className="text-orange-400 font-black text-4xl">
						Recupera el acceso {""}
						<span className="text-black">
							a tu cuenta en ITSur.
						</span>
					</h1>
				</div>
				<div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
					<form onSubmit={handleSubmit}>
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
						<input
							type="submit"
							value="Enviar Instrucciones"
							className="bg-orange-400 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-orange-600 md:w-auto"
						/>
					</form>
					<nav className="mt-10 lg:flex lg:justify-between">
						<Link
							to="/"
							className="block text-center my-5 text-gray-500 hover:text-gray-600"
						>
							¿Ya tienes una cuenta? Inicia Sesión
						</Link>
						<Link
							to="/registrar"
							className="block text-center my-5 text-gray-500 hover:text-gray-600"
						>
							¿No tienes una cuenta? Regístrate
						</Link>
					</nav>
				</div>
			</main>
		</>
	);
};

export default OlvidePassword;
