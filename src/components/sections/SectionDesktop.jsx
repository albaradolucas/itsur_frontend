// images
import desktop from "../../assets/img/desktop.png";

const SectionDesktop = () => {
	return (
		<section className="sec-desk">
			<div className="intro">
				<h3>Crea tu aplicación desktop hoy</h3>
				<p>
					ITsur tiene una variedad de características que lo hacen el
					mejor lugar para desarrollar
				</p>
			</div>
			<div className="features">
				<div className="text">
					<div className="feature">
						<span className="icon-sm">
							<i className="bi bi-chat"></i>
						</span>
						<div className="description">
							<h4 className="title-fet">Presenta tu idea</h4>
							<p className="text-fet">
								Comunica por correo o Whatsapp tu proyecto y
								recibí asesoramiento.
							</p>
						</div>
					</div>
					<div className="feature">
						<span className="icon-sm">
							<i className="bi bi-currency-dollar"></i>
						</span>
						<div className="description">
							<h4 className="title-fet">Recibí un presupuesto</h4>
							<p className="text-fet">
								Una vez hayas presentado tu idea, el equipo te
								dará un precio.
							</p>
						</div>
					</div>
					<div className="feature">
						<span className="icon-sm">
							<i className="bi bi-person-workspace"></i>
						</span>
						<div className="description">
							<h4 className="title-fet">Trabajemos juntos</h4>
							<p className="text-fet">
								Cuando estén los anteriores pasos, nuestro
								equipo de desarrollo se encargará de llevar a
								cabo tu idea.
							</p>
						</div>
					</div>
				</div>
				<div className="image d-none d-md-block">
					<img
						src={desktop}
						alt="desktop"
					/>
				</div>
			</div>
		</section>
	);
};

export default SectionDesktop;
