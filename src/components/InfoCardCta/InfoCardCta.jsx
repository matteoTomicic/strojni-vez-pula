/* eslint-disable jsx-a11y/alt-text */
import content from "@constants/content.constants";
import Image from "next/image";
import { StyledInfoCardCta } from "@components/InfoCardCta/InfoCardCta.style";
import CtaButton from "@UI/CtaButton";
import PropTypes from "prop-types";

const InfoCardCta = (props) => {
	return (
		<StyledInfoCardCta>
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
						<CtaButton href="/o-nama" className="cta-dark" linkTitle={props.ctaText} />
					</div>
				</div>
			</div>
		</StyledInfoCardCta>
	);
};

InfoCardCta.propTypes = {
	image: PropTypes.object.isRequired,
	cardTitle: PropTypes.string.isRequired,
	cardInfo: PropTypes.string.isRequired,
	ctaText: PropTypes.string.isRequired,
};

export default InfoCardCta;
