import content from "@constants/content.constants";
import { StyledContactUsSection } from "@components/ContactUsSection/ContactUsSection.style";
import CtaButton from "@UI/CtaButton";

const ContactUsSection = () => {
	return (
		<StyledContactUsSection>
			<div className="container container-column">
				<h2>{content.home.contactUsSectionTitle}</h2>
				<p>{content.home.contactUsSectionInfo}</p>
				<CtaButton href={content.path.contact} className="cta-red" linkTitle={content.btn.contactUsBtn} />
			</div>
		</StyledContactUsSection>
	);
};

export default ContactUsSection;
