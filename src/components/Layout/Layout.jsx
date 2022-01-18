import Navigation from "@components/Globals/Navigation/Navigation";
import Head from "next/head";
import PropTypes from "prop-types";

const Layout = ({ title, children }) => {
	return (
		<>
			<Head>
                <title>{title}</title>
            </Head>
			<Navigation />
			{children}
		</>
	);
};

Layout.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.array.isRequired
};

export default Layout;
