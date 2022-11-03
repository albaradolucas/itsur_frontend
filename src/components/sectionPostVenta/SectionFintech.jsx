// Libraries
import { Link } from "react-router-dom";

// Images
import fintech from "../../assets/img/fintech.jpg";

const SectionFintech = () => {
	return (
		<section className="sec-home">
			<div className="home-cta row">
                <div className="col-8">
                    <h2 className="font-bold text-4xl">Asistencia Técnica</h2>
                    <p className="product-subtitle text-base">
                        ¿Necesitas asistencia relacionada con Nahuel u otros aplicativos de ITSur?
                        <br />
                        No dudes en escribirnos!
                    </p>
                    <div>
                        <button>
                            <Link className="btn-main" to="https://redmine.itsur.com.ar/redmine/login">Solicitud de desarrollo</Link>
                        </button>
                    </div>
                </div>
			</div>
			<div className="col-5 md-none d-md-block">
				<img className="rounded w-[600px]" src={fintech} alt="desktop" />
			</div>
		</section>
	);
};

export default SectionFintech;
