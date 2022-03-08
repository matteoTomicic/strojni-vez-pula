import images from "@constants/image.constants";
import content from "@constants/content.constants";
import { StyledContactCardMiniWrapper } from "@components/ContactCardMiniWrapper/ContactCardMiniWrapper.style";
import ContactCardMini from "@components/ContactCardMiniWrapper/ContactCardMini/ContactCardMini";

const ContactCardMiniWrapper = () => {
	return (
		<StyledContactCardMiniWrapper>
			<div className="container">
				<ContactCardMini cardType="link" href="mailto:strojnivezpula@gmail.com" cardText={content.contact.contactCardMail} icon={images.icons.mail} />
				<ContactCardMini cardType="link" href="tel:0038598315155" cardText={content.contact.contactNo} icon={images.icons.phone} />
				<ContactCardMini cardType="text" cardText={content.contact.contactAdress} icon={images.icons.location} />
			</div>
		</StyledContactCardMiniWrapper>
	);
};

export default ContactCardMiniWrapper;
