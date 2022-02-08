/* eslint-disable jsx-a11y/alt-text */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

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

export default ImageCarousel;
