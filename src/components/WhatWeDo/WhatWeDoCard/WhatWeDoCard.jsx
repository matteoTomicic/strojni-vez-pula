/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";

import PropTypes from "prop-types";

import { StyledWhatWeDoCard } from "@components/WhatWeDo/WhatWeDoCard/WhatWeDoCard.style";

const WhatWeDoCard = (props) => {
	const { image, cardTitle, cardInfo } = props;

	return (
		<StyledWhatWeDoCard>
			<Image {...image} />
			<h3>{cardTitle}</h3>
			<p>{cardInfo}</p>
		</StyledWhatWeDoCard>
	);
};

WhatWeDoCard.propTypes = {
	image: PropTypes.object.isRequired,
	cardTitle: PropTypes.string.isRequired,
	cardInfo: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default WhatWeDoCard;
