/* eslint-disable jsx-a11y/alt-text */
import { StyledContactCard } from "@components/Globals/Footer/ContactCard/ContactCard.style";
import Image from "next/image";
import PropTypes from "prop-types";

const ContactInfo = (props) => {
	const checkCardType = () => (props.cardType === "link" ? <a href={props.href}>{props.text}</a> : props.cardType === "text" ? <p>{props.text}</p> : null);

	return (
		<StyledContactCard>
			<Image {...props.icon} />
			{checkCardType()}
		</StyledContactCard>
	);
};

export default ContactInfo;

ContactInfo.propTypes = {
	cardType: PropTypes.string.isRequired,
	icon: PropTypes.object.isRequired,
	text: PropTypes.string.isRequired,
	href: PropTypes.string,
};
