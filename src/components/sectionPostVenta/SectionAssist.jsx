// Libraries
import { Link } from "react-router-dom";

// Images
import assist from "../../assets/img/assist.jpg";

const SectionAssist = () => {
	return (
		<section className="sec-home">
			<div className="home-cta row">
                <div className="col-8">
                    <h2 className="font-bold text-4xl">Asistencia Técnica</h2>
                    <p className="product-subtitle text-base">
                        ¿Necesitas asistencia relacionada con puestos de trabajo, servidores o infraestructura?
                        <br />
                        No dudes en escribirnos!
                    </p>
                    <div>
                        <button>
                            <Link className="btn-main" to="https://tickets.itsur.com.ar/">Solicitud de soporte</Link>
                        </button>
                    </div>
                </div>
			</div>
			<div className="col-5 md-none d-md-block">
				<img className="rounded" src={assist} alt="desktop" />
			</div>
		</section>
	);
};

export default SectionAssist;
