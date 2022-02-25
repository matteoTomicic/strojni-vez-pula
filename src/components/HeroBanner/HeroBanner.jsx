/* eslint-disable jsx-a11y/alt-text */
import { StyledHeroBanner } from "@components/HeroBanner/HeroBanner.style";
import Image from "next/image";
import PropTypes from "prop-types";

const HeroBanner = (props) => {
	return (
		<StyledHeroBanner>
			<Image {...props.image} />
			<div>
				<h1>{props.bannerTitle}</h1>
			</div>
		</StyledHeroBanner>
	);
};

HeroBanner.propTypes = {
	image: PropTypes.object.isRequired,
	bannerTitle: PropTypes.string.isRequired,
};

export default HeroBanner;
