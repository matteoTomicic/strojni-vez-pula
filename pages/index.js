import Layout from "@components/Layout/Layout";
import HomepageBanner from "@components/HomepageBanner/HomepageBanner";
import WhatWeDo from "@components/WhatWeDo/WhatWeDo";

const Home = () => {
    return (
        <Layout title="Strojni vez Pula">
            <HomepageBanner />
            <WhatWeDo />
        </Layout>
    );
};

export default Home;
