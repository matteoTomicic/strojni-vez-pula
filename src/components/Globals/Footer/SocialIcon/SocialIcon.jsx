/* eslint-disable jsx-a11y/alt-text */
import Link from "next/link";
import Image from "next/image";

import PropTypes from "prop-types";

const SocialIcon = (props) => {
	const { href, icon } = props;

	return (
		<div className="socialIcon-wrapper">
			<Link href={href}>
				<a target="_blank">
					<Image {...icon} />
				</a>
			</Link>
		</div>
	);
};

export default SocialIcon;

SocialIcon.propTypes = {
	href: PropTypes.string.isRequired,
	icon: PropTypes.object.isRequired,
};
