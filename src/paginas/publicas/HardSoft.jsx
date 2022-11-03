// Styles
import "../../assets/styles/button.css";
import "../../assets/styles/header.css";
import "../../assets/styles/footer.css";
import "../../assets/styles/sectionbenefit.css";

import SectionJob from "../../components/sectionHS/SectionJob";
import SectionComunication from "../../components/sectionHS/SectionComunication";
import SectionServidores from "../../components/sectionHS/SectionServidores";
import SectionHSBenefit from "../../components/sectionHS/SectionHSBenefit";

const HardSoft = () => {
	return (
		<>
			<SectionJob/>
			<SectionComunication/>
			<SectionServidores/>
			<SectionHSBenefit/>
		</>
	);
};

export default HardSoft;
