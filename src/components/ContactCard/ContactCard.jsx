/* eslint-disable jsx-a11y/alt-text */
import { StyledContactCard } from "@components/ContactCard/ContactCard.style";
import Image from "next/image";
import images from "@constants/image.constants";
import content from "@constants/content.constants";

const ContactCard = () => {
	return (
		<StyledContactCard>
			<div className="container">
				<div className="image-wrapper">
					<Image {...images.banners.kontakt} />
				</div>
				<div className="text-wrapper">
					<h1>{content.contact.contactCardTitle}</h1>
					<p>{content.contact.contactCardInfo}</p>
					<a href="mailto:strojnivezpula@gmail.com>">{content.contact.contactCardMail}</a>
					<p>{content.contact.contactCardDisclaimer}</p>
				</div>
			</div>
		</StyledContactCard>
	);
};

export default ContactCard;
