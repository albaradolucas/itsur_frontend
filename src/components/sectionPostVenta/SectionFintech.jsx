// Libraries
import { Link } from "react-router-dom";

// Images
import fintech from "../../assets/img/fintech.jpg";

const SectionFintech = () => {
	return (
		<section className="sec-home container-fluid">
			<div className="home-cta row">
                <div className="col-md-8">
                    <h2 className="font-bold text-4xl">Asistencia Técnica</h2>
                    <p className="product-subtitle text-base">
                        ¿Necesitas asistencia relacionada con Nahuel u otros aplicativos de ITSur?
                        <br />
                        No dudes en escribirnos!
                    </p>
                    <div className="w-[320px]">
                        <button>
                            <Link className="btn-main" to="https://redmine.itsur.com.ar/redmine/login">Solicitud de desarrollo</Link>
                        </button>
                    </div>
                </div>
			</div>
			<div className="col-md-5 d-none d-md-block">
				<img className="rounded w-[600px]" src={fintech} alt="desktop" />
			</div>
		</section>
	);
};

export default SectionFintech;
