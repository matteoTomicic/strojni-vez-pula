/* eslint-disable jsx-a11y/alt-text */
import { StyledContactCard } from "@components/Globals/Footer/ContactCard/ContactCard.style";
import Image from "next/image";
import PropTypes from "prop-types";

const ContactInfo = (props) => {
	return (
		<StyledContactCard>
			<Image {...props.icon} />
			<p>{props.text}</p>
		</StyledContactCard>
	);
};

export default ContactInfo;

ContactInfo.propTypes = {
	icon: PropTypes.object.isRequired,
	text: PropTypes.string.isRequired,
};
