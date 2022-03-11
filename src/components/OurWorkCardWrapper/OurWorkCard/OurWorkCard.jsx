/* eslint-disable jsx-a11y/alt-text */
import { StyledOurWorkCard } from "@components/OurWorkCardWrapper/OurWorkCard/OurWorkCard.style";
import useScreenSize from "@components/Hooks/useScreenSize";
import Image from "next/image";
import PropTypes from "prop-types";

const OurWorkCard = (props) => {
	const screen = useScreenSize();
	const cardImageSize = screen?.isDesktop ? 225 : screen?.isDesktopXL ? 260 : 200;

	return (
		<StyledOurWorkCard>
			<Image {...props.cardImage} width={cardImageSize} height={cardImageSize} />
			<div>
				<p>{props.cardTitle}</p>
			</div>
		</StyledOurWorkCard>
	);
};

OurWorkCard.propTypes = {
	cardImage: PropTypes.object.isRequired,
	cardTitle: PropTypes.string.isRequired,
};

export default OurWorkCard;
