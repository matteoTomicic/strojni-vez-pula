/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";

import PropTypes from "prop-types";

import { StyledInfoCardCta } from "@components/InfoCardCta/InfoCardCta.style";
import CtaButton from "@UI/CtaButton";

const InfoCardCta = (props) => {
	return (
		<StyledInfoCardCta className={props.className}>
			<div className="container">
				<div className="image image-dt">
					<Image {...props.image} />
				</div>
				<div className="content">
					<h2>{props.cardTitle}</h2>
					<div className="image image-sp">
						<Image {...props.image} />
					</div>
					<div className="ctaBox">
						<p>{props.cardInfo}</p>
						<CtaButton href={props.linkTo} className="cta-dark" linkTitle={props.ctaText} />
					</div>
				</div>
			</div>
		</StyledInfoCardCta>
	);
};

InfoCardCta.propTypes = {
	className: PropTypes.string,
	image: PropTypes.object.isRequired,
	cardTitle: PropTypes.string.isRequired,
	cardInfo: PropTypes.string.isRequired,
	linkTo: PropTypes.string.isRequired,
	ctaText: PropTypes.string.isRequired,
};

export default InfoCardCta;
