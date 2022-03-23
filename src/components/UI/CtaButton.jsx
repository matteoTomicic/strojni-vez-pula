import Link from "next/link";

import PropTypes from "prop-types";

const CtaButton = (props) => {
	const { href, className, linkTitle } = props;

	return (
		<Link href={href}>
			<a className={["cta", className].join(" ")}>{linkTitle}</a>
		</Link>
	);
};

CtaButton.propTypes = {
	href: PropTypes.string.isRequired,
	className: PropTypes.string,
	linkTitle: PropTypes.string.isRequired,
};

export default CtaButton;
