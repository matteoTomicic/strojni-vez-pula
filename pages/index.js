import Layout from "@components/Layout/Layout";
import HomepageBanner from "@components/HomepageBanner/HomepageBanner";
import WWD from "@components/WWD/WWD";

const Home = () => {
    return (
        <Layout title="Strojni vez Pula">
            <HomepageBanner />
            <WWD />
        </Layout>
    );
};

export default Home;
