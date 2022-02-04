import Layout from "@components/Layout/Layout";
import HomepageBanner from "@components/HomepageBanner/HomepageBanner";
import WhatWeDo from "@components/WhatWeDo/WhatWeDo";
import AboutUsBrief from "@components/AboutUsBrief/AboutUsBrief";
import OurWorkHomepageSection from "@components/OurWorkHomepageSection/OurWorkHomepageSection";

const Home = () => {
    return (
        <Layout title="Strojni vez Pula">
            <HomepageBanner />
            <WhatWeDo />
            <AboutUsBrief />
            <OurWorkHomepageSection />
        </Layout>
    );
};

export default Home;
