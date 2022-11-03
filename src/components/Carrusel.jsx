// Import Swiper React components
import { Swiper } from "swiper";

// Import Swiper styles
import "swiper/css";

const Carrusel = () => {
	/*===== SWIPER CAROUSEL =====*/
	const swiper = new Swiper(".carrusel__container", {
		spaceBetween: 16,
		// Optional parameters
		loop: true,
		grabCursor: true,

		// If we need pagination
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		breakpoints: {
			640: {
				slidesPerView: 2,
			},
			1024: {
				slidesPerView: 3,
			},
		},
	});

	return (
		<>
			<section>
				<div className="carrusel__container swiper-container">
					<div className="swiper-wrapper">
						<div className="swiper-slide carrusel">
							<h3>Puestos de trabajo</h3>
							<p className="carrusel__description">
								La productividad de una empresa radica en su
								personal. Realizamos una evaluación de cada
								puesto de trabajo y las funciones que desempeñan
								para poder asegurar a cada usuario las
								herramientas correctas, performantes y bien
								mantenidas. Éstas le proveerán los medios para
								alcanzar las metas de producción.
							</p>
						</div>
						<div className="swiper-slide carrusel">
							<h3>Puestos de trabajo</h3>
							<p className="carrusel__description">
								La productividad de una empresa radica en su
								personal. Realizamos una evaluación de cada
								puesto de trabajo y las funciones que desempeñan
								para poder asegurar a cada usuario las
								herramientas correctas, performantes y bien
								mantenidas. Éstas le proveerán los medios para
								alcanzar las metas de producción.
							</p>
						</div>
						<div className="swiper-slide carrusel">
							<h3>Puestos de trabajo</h3>
							<p className="carrusel__description">
								La productividad de una empresa radica en su
								personal. Realizamos una evaluación de cada
								puesto de trabajo y las funciones que desempeñan
								para poder asegurar a cada usuario las
								herramientas correctas, performantes y bien
								mantenidas. Éstas le proveerán los medios para
								alcanzar las metas de producción.
							</p>
						</div>
					</div>
					<div className="swiper-pagination"></div>
				</div>
			</section>
		</>
	);
};

export default Carrusel;
