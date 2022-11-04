// libraries
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import useAuth from "../hooks/useAuth";

// images
import logoit from "../assets/img/logoit.png";

import { HiOutlineMenu } from "react-icons/hi";
import { RiCloseLine } from "react-icons/ri";
import { links } from "../config/constants";

const NavLinks = () => (
	<div className="nav-menu d-none d-md-block">
		<ul className="main-menu">
			<li>
				{links.map((link) => (
					<NavLink className="p-3" key={link.name} to={link.to}>
						{link.name}
					</NavLink>
				))}
			</li>
		</ul>
	</div>
);

const Header = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	const { auth, cerrarSesion } = useAuth();

	return (
		<>
			<header>
				<div className="nav-bar">
					<div className="logo">
						<Link to="/">
							<img src={logoit} alt="logo" />
						</Link>
					</div>
					<div className="nav-menu d-none d-md-block">
						<NavLinks />
					</div>
					<nav className="gtsd d-none d-md-block">
						{auth?._id ? (
							<>
								<Link onClick={cerrarSesion} to="/login" className="btn-main-s">
									Cerrar Sesión
								</Link>
							</>
						) : (
							<>
								<Link to="/registrar" className="btn-sec-s">Registrarse</Link>
								<Link to="/login" className="btn-main-s">Iniciar Sesión</Link>
							</>
						)}
					</nav>
				</div>
				<div className="absolute md:hidden block top-6 right-6">
					{mobileMenuOpen ? (
						<RiCloseLine
							className="w-6 h-6 text-black mr-2"
							onClick={() => setMobileMenuOpen(false)}
						/>
					) : (
						<HiOutlineMenu
							className="w-6 h-6 text-black mr-2"
							onClick={() => setMobileMenuOpen(true)}
						/>
					)}
				</div>

				<div
					className={`absolute flex flex-col content-evenly top-0 h-screen w-2/3 bg-gradient-to-bl from-zinc-300 to-[#d3853b] backdrop-blur-md z-10 p-6 md:hidden smooth-transition ${
						mobileMenuOpen ? "left-0" : "-left-full"
					}`}
				>
					<div className="logo">
						<Link to="/">
							<img src={logoit} alt="logo" />
						</Link>
					</div>
					<div>
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
						<Link to="/registrar" className="btn-sec-s">
							Registrarse
						</Link>
						<Link to="/login" className="btn-main-s">
							Iniciar Sesión
						</Link>
					</nav>
				</div>
			</header>
		</>
	);
};

export default Header;
