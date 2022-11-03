// Styles
import "../../assets/styles/button.css";
import "../../assets/styles/header.css";
import "../../assets/styles/footer.css";
import "../../assets/styles/sectionhome.css";
import "../../assets/styles/sectiondesktop.css";
import "../../assets/styles/sectionmobile.css";
import "../../assets/styles/sectionbenefit.css";
import "../../assets/styles/sectioneslogan.css";
import "../../assets/styles/sectiononb.css";

// Components
import SectionHome from "../../components/sectionsInicio/SectionHome";
import SectionDesktop from "../../components/sectionsInicio/SectionDesktop";
import SectionMobile from "../../components/sectionsInicio/SectionMobile";
import SectionBenefit from "../../components/sectionsInicio/SectionBenefit";
import SectionEslogan from "../../components/sectionsInicio/SectionEslogan";
import SectionOnb from "../../components/sectionsInicio/SectionOnb";

const Inicio = () => {
	return (
		<>
			<SectionHome />
			<SectionDesktop />
			<SectionMobile />
			<SectionBenefit />
			<SectionEslogan />
			<SectionOnb />
		</>
	);
};

export default Inicio;
