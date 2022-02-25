import Layout from "@components/Layout/Layout";
import HeroBanner from "@components/HeroBanner/HeroBanner";
import images from "@constants/image.constants";

const Home = () => {
	return (
		<Layout title="O nama | Strojni vez Pula">
			<HeroBanner image={images.banners.slonKonacBanner} bannerTitle="O nama"/>
		</Layout>
	);
};

export default Home;
