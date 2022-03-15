import Link from "next/link";

import PropTypes from "prop-types";

const CtaButton = (props) => (
	<Link href={props.href}>
		<a className={["cta", props.className].join(" ")}>{props.linkTitle}</a>
	</Link>
);

CtaButton.propTypes = {
	href: PropTypes.string.isRequired,
	className: PropTypes.string,
	linkTitle: PropTypes.string.isRequired,
};

export default CtaButton;
