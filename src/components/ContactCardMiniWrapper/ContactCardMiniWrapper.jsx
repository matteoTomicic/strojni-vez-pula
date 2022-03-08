import images from "@constants/image.constants";
import content from "@constants/content.constants";
import { StyledContactCardMiniWrapper } from "@components/ContactCardMiniWrapper/ContactCardMiniWrapper.style";
import ContactCardMini from "@components/ContactCardMiniWrapper/ContactCardMini/ContactCardMini";

const ContactCardMiniWrapper = () => {
	return (
		<StyledContactCardMiniWrapper>
			<div className="container">
				<ContactCardMini icon={images.icons.mail} cardText={content.contact.contactCardMail} />
				<ContactCardMini icon={images.icons.phone} cardText="+385 98 315 155" />
				<ContactCardMini icon={images.icons.location} cardText="Ruže Petrović 14, 52100 Pula" />
			</div>
		</StyledContactCardMiniWrapper>
	);
};

export default ContactCardMiniWrapper;
