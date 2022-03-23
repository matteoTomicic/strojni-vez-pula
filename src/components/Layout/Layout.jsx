import Head from "next/head";

import PropTypes from "prop-types";

import Navigation from "@components/Globals/Navigation/Navigation";
import Footer from "@components/Globals/Footer/Footer";

const Layout = ({ title, children }) => {
	return (
		<>
			<Head>
                <title>{title}</title>
            </Head>
			<Navigation />
			{children}
			<Footer />
		</>
	);
};

Layout.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.array.isRequired
};

export default Layout;
