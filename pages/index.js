import Layout from "@components/Layout/Layout";
import HomepageBanner from "@components/HomepageBanner/HomepageBanner";
import WhatWeDo from "@components/WhatWeDo/WhatWeDo";
import AboutUsBrief from "@components/AboutUsBrief/AboutUsBrief";
import LatestWorkSection from "@components/LatestWorkSection/LatestWorkSection";

const Home = () => {
    return (
        <Layout title="Strojni vez Pula">
            <HomepageBanner />
            <WhatWeDo />
            <AboutUsBrief />
            <LatestWorkSection />
        </Layout>
    );
};

export default Home;
