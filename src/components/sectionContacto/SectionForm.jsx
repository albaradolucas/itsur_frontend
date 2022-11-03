import { useState } from "react";
import swal from "@sweetalert/with-react";

const SectionForm = () => {
	// States
	const [nombre, setNombre] = useState("");
	const [email, setEmail] = useState("");
	const [numero, setNumero] = useState("");
	const [compañia, setCompañia] = useState("");
	const [asunto, setAsunto] = useState("");
	const [consulta, setConsulta] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		if ([nombre, email, numero, compañia, asunto, consulta].includes("")) {
			swal({
				title: "Campos vacíos!",
				text: "Todos los campos son obligatorios",
				icon: "error",
				button: "Entendido!",
			});
			return;
		}
	};

	return (
		<>
			<main className="container mx-auto md:grid md:grid-cols-2 gap-10 p-5 items-center">
				<div>
					<h1 className="text-orange-400 font-black text-4xl">
						Llene el formulario con su pregunta {""}
						<span className="text-black">
							y nos encargaremos de darle una solución
						</span>
					</h1>
				</div>
				<div>
					<form
						className="bg-white py-10 px-5 mb-10 lg:mb-5 shadow-md rounded-md"
						onSubmit={handleSubmit}
					>
						<div className="my-1">
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
						<div className="my-3">
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
						<div className="my-3">
							<label className="uppercase text-gray-600 block text-xl font-bold">
								Número:
							</label>
							<input
								type="number"
								placeholder="¿Cuál es tu número?"
								className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
								value={numero}
								onChange={(e) => setNumero(e.target.value)}
							/>
						</div>
						<div className="my-3">
							<label className="uppercase text-gray-600 block text-xl font-bold">
								Compañia:
							</label>
							<input
								type="text"
								placeholder="¿Cuál es tu compañia?"
								className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
								value={compañia}
								onChange={(e) => setCompañia(e.target.value)}
							/>
						</div>
						<div className="my-3">
							<label className="uppercase text-gray-600 block text-xl font-bold">
								Asunto:
							</label>
							<input
								type="text"
								placeholder="¿Cuál es el asunto?"
								className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
								value={asunto}
								onChange={(e) => setAsunto(e.target.value)}
							/>
						</div>
						<div className="my-1">
							<label className="uppercase text-gray-600 block text-xl font-bold">
								Consulta:
							</label>
							<textarea
								placeholder="Coloca aquí la consulta"
								className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
								value={consulta}
								onChange={(e) => setConsulta(e.target.value)}
							/>
						</div>
						<input
							type="submit"
							className="bg-orange-400 text-white font-bold p-3 rounded w-full hover:bg-orange-600 cursor-pointer transition-colors"
						/>
					</form>
				</div>
			</main>
		</>
	);
};

export default SectionForm;
