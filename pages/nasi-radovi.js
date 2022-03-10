import Layout from "@components/Layout/Layout";
import images from "@constants/image.constants";
import content from "@constants/content.constants";
import HeroBanner from "@components/HeroBanner/HeroBanner";

const OurWork = () => {
	return (
		<Layout title="Naši radovi | Strojni vez Pula">
			<HeroBanner image={images.banners.vezBanner} bannerTitle="Naši radovi" />
		</Layout>
	);
};

export default OurWork;
