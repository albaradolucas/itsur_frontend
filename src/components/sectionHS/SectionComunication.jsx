import comunicacion from "../../assets/img/comunicacion.jpg";

const SectionJob = () => {
	return (
		<>
			<section className="sec-home comunication">
				<div className="home-img d-none d-md-block">
					<img
						className="mr-6 rounded"
						src={comunicacion}
						alt="desktop"
					/>
				</div>
				<div className="home-cta">
					<h2 className="md:text-4xl text-2xl">Comunicaciones</h2>
					<p className="text-base">
						No existe actualmente una empresa que se considere
						competitiva que no esté conectada con su entorno
						regional, nacional e internacional. Esto hace que las
						redes de comunicación se tornen cada vez más
						importantes. El buen diseño e instalación con materiales
						de primera calidad, brindará a la red una base
						sustentable para el funcionamiento de los servidores y
						las estaciones de trabajo.
					</p>
				</div>
			</section>
		</>
	);
};

export default SectionJob;
