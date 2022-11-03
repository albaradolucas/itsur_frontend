import server from "../../assets/img/server.jpg";

const SectionServidores = () => {
	return (
		<>
			<section className="sec-home">
				<div className="home-cta">
					<h2 className="text-4xl">Infraestructura de servidores</h2>
					<p className="text-base">
						Las empresas modernas requieren una infraestructura de base acorde con sus necesidades tecnológicas. Confeccionamos un plan de mejoras e inversiones que permitan atender los requerimientos actuales y proveer la posibilidad de proyectar un crecimiento futuro, así como también procedimientos para diseñar su plan de contingencias y recuperación de desastres informáticos
					</p>
				</div>
				<div className="home-img d-none d-md-block">
					<img className="ml-6 rounded" src={server} alt="desktop" />
				</div>
			</section>
		</>
	);
};

export default SectionServidores;
