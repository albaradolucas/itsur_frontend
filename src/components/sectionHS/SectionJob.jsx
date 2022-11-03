import oficina from "../../assets/img/oficina.jpg";

const SectionJob = () => {
	return (
		<>
			<section className="sec-home">
				<div className="home-cta">
					<h2 className="text-4xl">Puestos de Trabajo</h2>
					<p className="text-base">
						La productividad de una empresa radica en su personal.
						Realizamos una evaluación de cada puesto de trabajo y
						las funciones que desempeñan para poder asegurar a cada
						usuario las herramientas correctas, performantes y bien
						mantenidas. Éstas le proveerán los medios para alcanzar
						las metas de producción.
					</p>
				</div>
				<div className="home-img d-none d-md-block">
					<img className="ml-6 rounded" src={oficina} alt="desktop" />
				</div>
			</section>
		</>
	);
};

export default SectionJob;
