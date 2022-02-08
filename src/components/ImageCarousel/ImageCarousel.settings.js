export const HpCarouselSettings = {
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
