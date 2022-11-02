// libraries
import { Link } from "react-router-dom";
// images
import logoit from "../assets/img/logoit.png";

const Header = () => {
	return (
		<header>
			<div className="nav-bar">
				<div className="logo">
					<Link to="/">
						<img
							src={logoit}
							alt="logo"
						/>
					</Link>
				</div>
				<div className="nav-menu d-none d-md-block">
					<ul className="main-menu">
						<li>
							<Link to="/">Inicio</Link>
						</li>
						<li>
							<Link to="/productos">Productos</Link>
						</li>
						<li>
							<Link to="/hardsoft">Hardware y Software</Link>
						</li>
						<li>
							<Link to="/post_venta">Post-venta</Link>
						</li>
						<li>
							<Link to="/contacto">Contáctenos</Link>
						</li>
					</ul>
				</div>
				<nav className="gtsd">
					<Link to="/registrar" className="btn-sec-s">Registrarse</Link>
					<Link to="/login" className="btn-main-s">Iniciar Sesión</Link>
				</nav>
			</div>
		</header>
	);
};

export default Header;
