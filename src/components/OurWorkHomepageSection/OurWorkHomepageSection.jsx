/* eslint-disable jsx-a11y/alt-text */
import { StyledOurWorkHomepageSection } from "@components/OurWorkHomepageSection/OurWorkHomepageSection.style";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { ourWorkHpCarouselTopImages, ourWorkHpCarouselBottomImages } from "@constants/ourWorkHpCarousel.constants";

const OurWorkHomepageSection = () => {
	const settings = {
		arrows: false,
		infinite: true,
		speed: 6000,
		slidesToShow: 9,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 0,
		cssEase: "linear",
		responsive: [
			{
				breakpoint: 575,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 5,
				},
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 6,
				},
			},
			{
				breakpoint: 1199,
				settings: {
					slidesToShow: 8,
				},
			},
		],
	};

	return (
		<StyledOurWorkHomepageSection>
			<div className="container">
				<h2>Naši najnoviji radovi</h2>
			</div>
			<div className="carouselBlock">
				<Slider {...settings}>
					{ourWorkHpCarouselTopImages.map((image, index) => {
						return (
							<div key={index}>
								<Image {...image} />
							</div>
						);
					})}
				</Slider>
				<Slider {...settings} rtl={true}>
					{ourWorkHpCarouselBottomImages.map((image, index) => {
						return (
							<div key={index}>
								<Image {...image} />
							</div>
						);
					})}
				</Slider>
			</div>
		</StyledOurWorkHomepageSection>
	);
};

export default OurWorkHomepageSection;
