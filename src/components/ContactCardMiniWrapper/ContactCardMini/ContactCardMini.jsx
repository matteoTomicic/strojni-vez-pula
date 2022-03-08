/* eslint-disable jsx-a11y/alt-text */
import { StyledContactCardMini } from "@components/ContactCardMiniWrapper/ContactCardMini/ContactCardMini.style";
import Image from "next/image";
import PropTypes from "prop-types";

const ContactCardMini = (props) => {
	const generateCardType = () => (props.href ? <a href={props.href}>{props.cardText}</a> : props.cardText);

	return (
		<StyledContactCardMini>
			<Image {...props.icon} width={35} height={35} />
			<p>{generateCardType()}</p>
		</StyledContactCardMini>
	);
};

ContactCardMini.propTypes = {
	href: PropTypes.string,
	icon: PropTypes.object.isRequired,
	cardText: PropTypes.string.isRequired,
};

export default ContactCardMini;
