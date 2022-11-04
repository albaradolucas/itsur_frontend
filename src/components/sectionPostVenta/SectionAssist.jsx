// Libraries
import { Link } from "react-router-dom";

// Images
import assist from "../../assets/img/assist.jpg";

const SectionAssist = () => {
	return (
		<section className="sec-home container-fluid">
			<div className="home-cta row">
                <div className="col-md-8">
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
			<div className="col-md-5 d-none d-md-block">
				<img className="rounded" src={assist} alt="desktop" />
			</div>
		</section>
	);
};

export default SectionAssist;
