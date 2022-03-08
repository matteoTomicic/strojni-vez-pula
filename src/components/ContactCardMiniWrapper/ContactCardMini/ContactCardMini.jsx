/* eslint-disable jsx-a11y/alt-text */
import { StyledContactCardMini } from "@components/ContactCardMiniWrapper/ContactCardMini/ContactCardMini.style";
import Image from "next/image";
import PropTypes from "prop-types";

const ContactCardMini = (props) => {
	return (
		<StyledContactCardMini>
			<Image {...props.icon} width={35} height={35} />
			<p>{props.cardText}</p>
		</StyledContactCardMini>
	);
};

ContactCardMini.propTypes = {
	icon: PropTypes.object.isRequired,
	cardText: PropTypes.string.isRequired,
};

export default ContactCardMini;
