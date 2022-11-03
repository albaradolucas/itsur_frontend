const SectionBenefit = () => {
	return (
		<section className="sec-benefit">
			<div className="intro">
				<h3>Infraestructura y soporte técnico</h3>
				<p>Aquí hay algunas razones por las que debe elegir ITsur</p>
			</div>
			<div className="bnf-cards row ms-0">
				<div className="benefit col-md">
					<i className="bi bi-server icon"></i>
					<div className="description">
						<h4 className="title">Almacenamiento seguro</h4>
						<p className="text">
							Almacenamos la gran mayoría de los activos digitales
							en almacenamiento seguro fuera de línea.
						</p>
					</div>
				</div>
				<div className="benefit col-md">
					<i className="bi bi-umbrella icon"></i>
					<div className="description">
						<h4 className="title">Protegido por seguro</h4>
						<p className="text">
							ITsur mantiene una cobertura para todas las
							soluciones digitales en que trabaja.
						</p>
					</div>
				</div>
				<div className="benefit col-md">
					<i className="bi bi-shield-shaded icon"></i>
					<div className="description">
						<h4 className="title">Buenas prácticas de industria</h4>
						<p className="text">
							ITsur se asegura por sus estándares, de tener las
							mejores prácticas del sector.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SectionBenefit;
