import images from "@constants/image.constants";
import content from "@constants/content.constants";
import { StyledContactCardMiniWrapper } from "@components/ContactCardMiniWrapper/ContactCardMiniWrapper.style";
import ContactCardMini from "@components/ContactCardMiniWrapper/ContactCardMini/ContactCardMini";

const ContactCardMiniWrapper = () => {
	return (
		<StyledContactCardMiniWrapper>
			<div className="container">
				<ContactCardMini href={content.path.mailto} cardText={content.contact.contactCardMail} icon={images.icons.mail} />
				<ContactCardMini href={content.path.tel} cardText={content.contact.contactNo} icon={images.icons.phone} />
				<ContactCardMini cardText={content.contact.contactAdress} icon={images.icons.location} />
			</div>
		</StyledContactCardMiniWrapper>
	);
};

export default ContactCardMiniWrapper;
