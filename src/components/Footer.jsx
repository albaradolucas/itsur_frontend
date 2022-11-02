// Libraries
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<section className="sec-ft ms-0">
			<div className="footer-cta row">
				<div className="col-md foot-1">
					<h4 className="cta-title">Contactanos</h4>
					<p className="cta-desc">
						+0299-4488433 <br />
						info@itsur.com.ar
					</p>
					<Link to="/contacto" className="btn-main">
						Contactar
					</Link>
				</div>
				<div className="col-md">
					<h4 className="cta-title">Misión ITsur</h4>
					<p className="cta-desc">
						Nuestra meta es brindar soluciones en la gestión de la
						información con un alto grado de profesionalismo,
						calidad y compromiso utilizando la tecnología como
						herramienta principal.
					</p>
				</div>
			</div>
			<div className="ft-words">
				Ejercicio hecho por{" "}
				<cite title="Lucas González">Lucas González</cite>, sin fines de
				lucro
			</div>
		</section>
	);
};

export default Footer;
