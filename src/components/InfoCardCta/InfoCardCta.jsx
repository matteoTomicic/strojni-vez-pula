/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";

import PropTypes from "prop-types";

import { StyledInfoCardCta } from "@components/InfoCardCta/InfoCardCta.style";
import CtaButton from "@UI/CtaButton";

const InfoCardCta = (props) => {
	const { className, image, cardTitle, cardInfo, linkTo, ctaText } = props;

	return (
		<StyledInfoCardCta className={className}>
			<div className="container">
				<div className="image image-dt">
					<Image {...image} />
				</div>
				<div className="content">
					<h2>{cardTitle}</h2>
					<div className="image image-sp">
						<Image {...image} />
					</div>
					<div className="ctaBox">
						<p>{cardInfo}</p>
						<CtaButton href={linkTo} className="cta-dark" linkTitle={ctaText} />
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
