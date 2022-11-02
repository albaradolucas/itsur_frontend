// Libraries
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// Images
import home from "../../assets/img/home.png";

// components
import Alerta from "../Alerta";

const SectionHome = () => {
	const navigate = useNavigate();

	const [email, setEmail] = useState("");
	const [alerta, setAlerta] = useState({});

	const handleSubmit = async (e) => {
		e.preventDefault();

		if ([email].includes("")) {
            setAlerta({ msg: "Debes ingresar tu email", error: true });
            return;
        }

		navigate("/contacto");
	}

	const { msg } = alerta;

	return (
		<section className="sec-home">
			<div className="home-cta">
				<h2 className="home-title h1">
					Integración y desarrollo de sistemas
				</h2>
				<p className="home-subtitle">
					ITsur es el mejor lugar si quiere llevar a cabo su propuesta
					tecnológica. Regístrese y comience hoy mismo.
				</p>
				<form onSubmit={handleSubmit}>
					<div className="lead-magnet row align-items-center">
						<div className="col input-col">
							<input
								type="email"
								className="form-control"
								name="email"
								id="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								placeholder="Dirección de correo"
							/>
						</div>
						<div className="col">
							<button className="btn-main">
								Comenzar
							</button>
						</div>
					</div>
				</form>
				{msg && <Alerta alerta={alerta} />}
			</div>
			<div className="home-img d-none d-md-block">
				<img src={home} alt="desktop" />
			</div>
		</section>
	);
};

export default SectionHome;
