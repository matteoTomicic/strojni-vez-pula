import Layout from "@components/Layout/Layout";
import images from "@constants/image.constants";
import content from "@constants/content.constants";
import HeroBanner from "@components/HeroBanner/HeroBanner";
import InfoCard from "@components/InfoCard/InfoCard";

const Home = () => {
	return (
		<Layout title="O nama | Strojni vez Pula">
			<HeroBanner
				image={images.banners.slonKonacBanner}
				bannerTitle="O nama"
			/>
			<InfoCard
				image={images.banners.konci}
				cardTitle={content.aboutUs.aboutUsCardTitle}
				cardInfo={content.aboutUs.aboutUsCardInfo}
			/>
			<InfoCard
				image={images.banners.ricomaStroj}
				cardTitle={content.aboutUs.strojeviTitle}
				cardInfo={content.aboutUs.strojeviInfo}
				className="rtl"
			/>
			<InfoCard
				image={images.banners.povijest}
				cardTitle={content.aboutUs.povijestTitle}
				cardInfo={content.aboutUs.povijestInfo}
			/>
		</Layout>
	);
};

export default Home;
