// Libraries
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

// Components
import Alerta from "../../components/Alerta";
import clienteAxios from "../../config/axios";
import swal from "@sweetalert/with-react";

const NuevoPassword = () => {
	const [password, setPassword] = useState("");
	const [repetirPassword, setRepetirPassword] = useState("");
	const [alerta, setAlerta] = useState({});
	const [tokenValido, setTokenValido] = useState(false);
	const [passwordModificado, setPasswordModificado] = useState(false);

	const params = useParams();
	const { token } = params;

	useEffect(() => {
		const comprobrarToken = async () => {
			try {
				await clienteAxios(`/olvide-password/${token}`);
				setAlerta({
					msg: "Coloca tu nueva contraseña",
				});
				setTokenValido(true);
			} catch (error) {
				setAlerta({
					msg: "Hubo un error con el enlace",
					error: true,
				});
			}
		};
		comprobrarToken();
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();

		if ([password, repetirPassword].includes("")) {
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

		setAlerta({});

		try {
			const { data } = await clienteAxios.post(
				`/olvide-password/${token}`,
				{ password }
			);

			setAlerta({
				msg: data.msg,
				error: false,
			});

			setPasswordModificado(true);
		} catch (error) {
			setAlerta({
				msg: error.response.data.msg,
				error: true,
			});
		}
	};

	const { msg } = alerta;

	return (
		<>
			<div>
				<h1 className="text-orange-400 font-black text-6xl">
					Reestablece tu Contraseña y no Pierdas Acceso a {""}
					<span className="text-black">tu cuenta ITSur</span>
				</h1>
			</div>
			<div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
				{msg && <Alerta alerta={alerta} />}

				{tokenValido && (
					<>
						<form onSubmit={handleSubmit}>
							<div className="my-5">
								<label className="uppercase text-gray-600 block text-xl font-bold">
									Contraseña Nueva:
								</label>
								<input
									type="password"
									placeholder="+6 Caracteres"
									className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
									value={password}
									onChange={(e) =>
										setPassword(e.target.value)
									}
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
								value="Reestablecer Contraseña"
								className="bg-orange-400 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-orange-600 md:w-auto"
							/>
						</form>
					</>
				)}

				{passwordModificado && (
					<Link
						to="/"
						className="block text-center my-5 text-gray-500"
					>
						Listo! Visita este link para iniciar sesión!
					</Link>
				)}
			</div>
		</>
	);
};

export default NuevoPassword;
