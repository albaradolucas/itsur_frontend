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
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SectionHome from "../../components/sections/SectionHome";
import SectionDesktop from "../../components/sections/SectionDesktop";
import SectionMobile from "../../components/sections/SectionMobile";
import SectionBenefit from "../../components/sections/SectionBenefit";
import SectionEslogan from "../../components/sections/SectionEslogan";
import SectionOnb from "../../components/sections/SectionOnb";

const Inicio = () => {

    return (
        <>
            <Header/>
            <div>
                <SectionHome/>
                <SectionDesktop/>
                <SectionMobile/>
                <SectionBenefit/>
                <SectionEslogan/>
                <SectionOnb/>
            </div>
            <Footer/>
        </>
    )
}

export default Inicio;
