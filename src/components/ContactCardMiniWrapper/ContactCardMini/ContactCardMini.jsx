/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";

import PropTypes from "prop-types";

import { StyledContactCardMini } from "@components/ContactCardMiniWrapper/ContactCardMini/ContactCardMini.style";

const ContactCardMini = (props) => {
	const { href, cardText, icon } = props;

	const generateCardType = () => (href ? <a href={href}>{cardText}</a> : cardText);

	return (
		<StyledContactCardMini>
			<Image {...icon} width={35} height={35} />
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
