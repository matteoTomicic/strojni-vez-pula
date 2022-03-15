import { sizes } from "@global/styles";
import styled from "styled-components";

export const StyledProductsModal = styled.div`
	display: none;
	background: rgba(0, 0, 0, 0.9);
	position: fixed;
	width: 100%;
	z-index: 999;
	top: 0;
	height: 100%;

	&.shown {
		display: block;
	}

	.ImageGallery {
		.image-gallery-right-nav {
			right: -15%;
		}

		.image-gallery-left-nav {
			left: -15%;
		}
	}

	p {
		color: white;
		font-family: cursive;
		font-size: 3.5rem;
		font-weight: bold;
		width: fit-content;
		cursor: pointer;
		align-self: flex-end;
		margin-bottom: 2.5rem;
	}

	.modal-container {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 90%;
		margin: 0 auto;

		@media (min-width: ${sizes.mdBreakMin}) {
			width: 75%;
		}

		@media (min-width: ${sizes.lgBreakMin}) {
			width: 50rem;
		}
	}
`;
