/* eslint-disable jsx-a11y/alt-text */
import { StyledContactCardMini } from "@components/ContactCardMiniWrapper/ContactCardMini/ContactCardMini.style";
import Image from "next/image";
import PropTypes from "prop-types";

const ContactCardMini = (props) => {
	const checkCardType = () => (props.cardType === "link" ? <a href={props.href}>{props.cardText}</a> : props.cardType === "text" ? <p>{props.cardText}</p> : null);

	return (
		<StyledContactCardMini>
			<Image {...props.icon} width={35} height={35} />
			{checkCardType()}
		</StyledContactCardMini>
	);
};

ContactCardMini.propTypes = {
	cardType: PropTypes.string.isRequired,
	href: PropTypes.string,
	icon: PropTypes.object.isRequired,
	cardText: PropTypes.string.isRequired,
};

export default ContactCardMini;
