import { StyledWWDCard } from "@components/WWD/WWDCard/WWDCard.style";
import Image from "next/image";
import PropTypes from "prop-types";

const WWDCard = props => {
	return (
		<StyledWWDCard>
			<Image
                src={props.imageSrc}
                alt={props.imageAlt}
                title={props.imageTitle}
                width={props.imageWidth}
                height={props.imageHeight}
            />
			<h2>{props.cardTitle}</h2>
			<p>{props.cardInfo}</p>
		</StyledWWDCard>
	);
};

WWDCard.propTypes = {
	imageSrc: PropTypes.string.isRequired,
	imageAlt: PropTypes.string.isRequired,
	imageTitle: PropTypes.string.isRequired,
	imageWidth: PropTypes.number.isRequired,
	imageHeight: PropTypes.number.isRequired,
	cardTitle: PropTypes.string.isRequired,
	cardInfo: PropTypes.string.isRequired,
};

export default WWDCard;
