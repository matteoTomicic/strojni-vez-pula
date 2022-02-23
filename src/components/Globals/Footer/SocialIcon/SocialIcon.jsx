/* eslint-disable jsx-a11y/alt-text */
import Link from "next/link";
import Image from "next/image";
import PropTypes from "prop-types";

const SocialIcon = (props) => {
	return (
		<div className="socialIcon-wrapper">
			<Link href={props.href}>
				<a target="_blank">
					<Image {...props.icon} />
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
