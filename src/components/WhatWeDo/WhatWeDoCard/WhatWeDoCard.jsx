/* eslint-disable jsx-a11y/alt-text */
import { StyledWhatWeDoCard } from "@components/WhatWeDo/WhatWeDoCard/WhatWeDoCard.style";
import Image from "next/image";
import PropTypes from "prop-types";

const WhatWeDoCard = (props) => (
	<StyledWhatWeDoCard>
		<Image {...props.image} />
		<h3>{props.cardTitle}</h3>
		<p>{props.cardInfo}</p>
	</StyledWhatWeDoCard>
);

WhatWeDoCard.propTypes = {
	image: PropTypes.object.isRequired,
	cardTitle: PropTypes.string.isRequired,
	cardInfo: PropTypes.string.isRequired,
};

export default WhatWeDoCard;
