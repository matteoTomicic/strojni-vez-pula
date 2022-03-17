/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";

import PropTypes from "prop-types";

import { StyledInfoCard } from "@components/InfoCard/InfoCard.style";

const InfoCard = (props) => {
	return (
		<StyledInfoCard className={props.className}>
			<div className="container">
				<div className="image-wrapper">
					<Image {...props.image} />
				</div>
				<div className="text-wrapper">
					<h3>{props.cardTitle}</h3>
					<p>{props.cardInfo}</p>
				</div>
			</div>
		</StyledInfoCard>
	);
};

InfoCard.propTypes = {
	className: PropTypes.string,
	image: PropTypes.object.isRequired,
	cardTitle: PropTypes.string.isRequired,
	cardInfo: PropTypes.string.isRequired,
};

export default InfoCard;
