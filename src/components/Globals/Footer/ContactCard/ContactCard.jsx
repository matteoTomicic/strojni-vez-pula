/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";

import PropTypes from "prop-types";

import { StyledContactCard } from "@components/Globals/Footer/ContactCard/ContactCard.style";

const ContactInfo = (props) => {
	const { href, text, icon } = props;

	const generateCardType = () => (href ? <a href={href}>{text}</a> : text);

	return (
		<StyledContactCard>
			<Image {...icon} />
			<p>{generateCardType()}</p>
		</StyledContactCard>
	);
};

export default ContactInfo;

ContactInfo.propTypes = {
	icon: PropTypes.object.isRequired,
	text: PropTypes.string.isRequired,
	href: PropTypes.string,
};
