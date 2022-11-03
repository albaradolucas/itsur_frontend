const SectionHSBenefit = () => {
	return (
		<section className="sec-benefit">
			<div className="intro">
				<h3>Infraestructura y soporte técnico</h3>
				<p>Aquí hay algunas razones por las que debe elegir ITsur</p>
			</div>
			<div className="bnf-cards row ms-0">
				<div className="benefit col-md">
					<i className="bi bi-tools icon"></i>
					<div className="description">
						<h4 className="title">Soporte Técnico</h4>
						<p className="text">
							Contamos con personal capacitado para realizar
							trabajos de forma presencial o remota.
						</p>
					</div>
				</div>
				<div className="benefit col-md">
					<i className="bi bi-graph-up-arrow icon"></i>
					<div className="description">
						<h4 className="title">Plan de mejoras</h4>
						<p className="text">
							Proveemos planes de mejoras y optimización del
							parque informático de la empresa.
						</p>
					</div>
				</div>
				<div className="benefit col-md">
					<i className="bi bi-telephone-fill icon"></i>
					<div className="description">
						<h4 className="title">Atención telefónica</h4>
						<p className="text">
                            Disponemos de líneas rotativas para solicitudes y consultas.
						</p>
					</div>
				</div>
			</div>

            <div className="bnf-cards row ms-0">
				<div className="benefit col-md">
					<i className="bi bi-clock-history icon"></i>
					<div className="description">
						<h4 className="title">Tiempo de respuesta</h4>
						<p className="text">
                            Brindamos atención prioritaria en casos de urgencias.
						</p>
					</div>
				</div>
				<div className="benefit col-md">
					<i className="bi bi-lock-fill icon"></i>
					<div className="description">
						<h4 className="title">Seguridad informática</h4>
						<p className="text">
                            Realizamos recomendaciones y capacitaciones a fin de aumentar el nivel de seguridad.
						</p>
					</div>
				</div>
				<div className="benefit col-md">
					<i className="bi bi-file-earmark-spreadsheet icon"></i>
					<div className="description">
						<h4 className="title">Inventario de equipamiento</h4>
						<p className="text">
                            Mantenemos un inventario actualizado del equipamiento electrónico de la empresa.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SectionHSBenefit;
