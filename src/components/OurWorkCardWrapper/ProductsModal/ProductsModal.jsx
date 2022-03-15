import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import PropTypes from "prop-types";

import { StyledProductsModal } from "@components/OurWorkCardWrapper/ProductsModal/ProductsModal.styles";
import {  vezovi } from "@global/mocks/ProductsGalleryImages";

const ProductsModal = (props) => {
	return (
		<StyledProductsModal className={props.className}>
			<div className="modal-container">
				<p onClick={props.closeModal}>X</p>
				<div className="gallery">
					<ImageGallery additionalClass="ImageGallery" items={vezovi} showFullscreenButton={false} showPlayButton={false} showThumbnails={false} />
				</div>
			</div>
		</StyledProductsModal>
	);
};

ProductsModal.propTypes = {
	className: PropTypes.string,
	closeModal: PropTypes.func,
};

export default ProductsModal;
