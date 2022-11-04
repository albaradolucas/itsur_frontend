// styles
import "../../assets/styles/button.css";
import "../../assets/styles/header.css";
import "../../assets/styles/footer.css";

import SectionAssist from "../../components/sectionPostVenta/SectionAssist";
import SectionFintech from "../../components/sectionPostVenta/SectionFintech";

const PostVenta = () => {
	return (
        <div className="flex flex-col justify-center items-center">
            <SectionAssist/>
            <SectionFintech/>
        </div>
    )
};

export default PostVenta;
