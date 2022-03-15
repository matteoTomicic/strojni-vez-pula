/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from "prop-types";

const ImageCarousel = (props) => {
	return (
		<Slider {...props.settings} rtl={props.rtl ? true : false}>
			{props.images.map((image, index) => {
				return (
					<div key={index}>
						<Image {...image} />
					</div>
				);
			})}
		</Slider>
	);
};

ImageCarousel.propTypes = {
	settings: PropTypes.object.isRequired,
	rtl: PropTypes.bool,
	images: PropTypes.array.isRequired,
};

export default ImageCarousel;
