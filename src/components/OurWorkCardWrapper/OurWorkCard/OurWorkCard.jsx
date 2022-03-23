/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";

import PropTypes from "prop-types";

import { StyledOurWorkCard } from "@components/OurWorkCardWrapper/OurWorkCard/OurWorkCard.style";
import useScreenSize from "@components/Hooks/useScreenSize";

const OurWorkCard = (props) => {
	const { handleShowModal, cardImage, cardTitle } = props;
	const screen = useScreenSize();
	const cardImageSize = screen?.isDesktop ? 225 : screen?.isDesktopXL ? 260 : 200;

	return (
		<StyledOurWorkCard onClick={handleShowModal}>
			<Image className="close-modal" {...cardImage} width={cardImageSize} height={cardImageSize} />
			<div>
				<p>{cardTitle}</p>
			</div>
		</StyledOurWorkCard>
	);
};

OurWorkCard.propTypes = {
	cardImage: PropTypes.object.isRequired,
	cardTitle: PropTypes.string.isRequired,
	handleShowModal: PropTypes.func,
};

export default OurWorkCard;
