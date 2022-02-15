import { StyledContactUsSection } from "@components/ContactUsSection/ContactUsSection.style";
import CtaButton from "@UI/CtaButton";

const ContactUsSection = () => {
	return (
		<StyledContactUsSection>
			<div className="container container--column">
				<h2 className="">Izrađujemo strojno vezenje na razne vrste promotivnih i svakodnevnih artikala</h2>
				<p>Radimo na materijalima poput pamuka, kepera, kože, flisa, filca, tkanine za tende i mnogim drugim materijalima</p>
				<CtaButton href="/kontakt" className="cta--red" linkTitle="Kontaktirajte nas" />
			</div>
		</StyledContactUsSection>
	);
};

export default ContactUsSection;
