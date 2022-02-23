import { home, btnContent } from "@constants/content.constants";
import { StyledContactUsSection } from "@components/ContactUsSection/ContactUsSection.style";
import CtaButton from "@UI/CtaButton";

const ContactUsSection = () => {
	return (
		<StyledContactUsSection>
			<div className="container container--column">
				<h2>{home.content.contactUsSectionTitle}</h2>
				<p>{home.content.contactUsSectionInfo}</p>
				<CtaButton href="/kontakt" className="cta--red" linkTitle={btnContent.contactUsBtn} />
			</div>
		</StyledContactUsSection>
	);
};

export default ContactUsSection;
