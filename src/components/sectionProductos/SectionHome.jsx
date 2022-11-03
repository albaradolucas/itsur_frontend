// Libraries
import { useNavigate } from "react-router-dom";

// Images
import mobile from "../../assets/img/mobile.png";

const SectionHome = () => {
    const navigate = useNavigate();
    const handleClick = (e) => {
        e.preventDefault();
        navigate("/contacto");
    }

	return (
		<section className="sec-home mt-11 mb-32">
			<div className="home-cta row">
                <div className="col-8">
                    <h2 className="font-bold text-4xl">Fintech - Nahuel</h2>
                    <p className="product-subtitle text-base">
                        Sistemas de gestión de negocios para entidades financieras
                        no bancarias. Soluciones para tarjetas de créditos,
                        prestamos personales, créditos de consumo, tarjetas de
                        compras, servicios de pago, boton de pago. 
                        <br /> Acompañamos la industria Fintech desde 1998.
                    </p>
                    <div className="row align-items-center">
                        <button onClick={handleClick} className="btn-main">Contactar</button>
                    </div>
                </div>
			</div>
			<div className="col-4 md-none d-md-block">
				<img src={mobile} alt="desktop" />
			</div>
		</section>
	);
};

export default SectionHome;
