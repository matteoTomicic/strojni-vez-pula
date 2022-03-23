import Layout from "@components/Layout/Layout";
import images from "@constants/image.constants";
import HeroBanner from "@components/HeroBanner/HeroBanner";
import OurWorkCardWrapper from "@components/OurWorkCardWrapper/OurWorkCardWrapper";

const OurWork = () => {
	return (
		<Layout title="Naši radovi | Strojni vez Pula">
			<HeroBanner image={images.banners.vezBanner} bannerTitle="Naši radovi" />
			<OurWorkCardWrapper />
		</Layout>
	);
};

export default OurWork;
