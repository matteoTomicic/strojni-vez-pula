import images from "@constants/image.constants";
import content from "@constants/content.constants";
import Layout from "@components/Layout/Layout";
import HomepageBanner from "@components/HomepageBanner/HomepageBanner";
import WhatWeDo from "@components/WhatWeDo/WhatWeDo";
import InfoCardCta from "@components/InfoCardCta/InfoCardCta";
import LatestWorkSection from "@components/LatestWorkSection/LatestWorkSection";
import ContactUsSection from "@components/ContactUsSection/ContactUsSection";

const Home = () => {
    return (
        <Layout title="Strojni vez Pula">
            <HomepageBanner />
            <WhatWeDo />
            <InfoCardCta
                image={images.banners.konciZaVezenje}
                cardTitle={content.home.infoCardCtaTitle}
                cardInfo={content.home.infoCardCtaInfo}
                ctaText={content.btn.aboutUsBtn}
            />
            <LatestWorkSection />
            <ContactUsSection />
        </Layout>
    );
};

export default Home;
