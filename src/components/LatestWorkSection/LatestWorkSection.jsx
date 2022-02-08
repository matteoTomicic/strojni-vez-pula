/* eslint-disable jsx-a11y/alt-text */
import { StyledLatestWorkSection } from "@components/LatestWorkSection/LatestWorkSection.style";
import ImageCarousel from "@components/ImageCarousel/ImageCarousel";
import { HpCarouselSettings } from "@components/ImageCarousel/ImageCarousel.settings";
import { HpTopCarouselImages, HpBottomCarouselImages } from "@mocks/HpCarouselImages";

const LatestWorkSection = () => {
	return (
		<StyledLatestWorkSection>
			<div className="container">
				<h2>Naši najnoviji radovi</h2>
			</div>
			<ImageCarousel settings={HpCarouselSettings} images={HpTopCarouselImages} />
			<ImageCarousel settings={HpCarouselSettings} images={HpBottomCarouselImages} rtl />
		</StyledLatestWorkSection>
	);
};

export default LatestWorkSection;
