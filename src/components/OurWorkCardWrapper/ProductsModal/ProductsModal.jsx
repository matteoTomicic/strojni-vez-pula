import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import PropTypes from "prop-types";

import { StyledProductsModal } from "@components/OurWorkCardWrapper/ProductsModal/ProductsModal.styles";

const ProductsModal = (props) => {
	return (
		<StyledProductsModal className={props.className}>
			<div className="modal-container">
				<p onClick={props.closeModal}>X</p>
				<div className="gallery">
					{props.items?.length ? <ImageGallery additionalClass="ImageGallery" items={props.items} showFullscreenButton={false} showPlayButton={false} showThumbnails={false} /> : null}
				</div>
			</div>
		</StyledProductsModal>
	);
};

ProductsModal.propTypes = {
	className: PropTypes.string,
	closeModal: PropTypes.func,
	items: PropTypes.array,
};

export default ProductsModal;
