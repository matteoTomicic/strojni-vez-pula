import styled from "styled-components";
import { sizes } from "@global/styles";

export const StyledInfoCard = styled.section`
	padding: 4vw 0;

	@media (min-width: ${sizes.mdBreakMin}) {
		padding: 2vw 0;
	}

	.container {
		justify-content: center;

		@media (min-width: ${sizes.mdBreakMin}) {
			align-items: center;
			justify-content: space-between;
		}
	}

	.image-wrapper {
		max-width: 37rem;

		@media (min-width: ${sizes.mdBreakMin}) {
			max-width: 100%;
			width: 45%;
		}

		img {
			border-radius: 0.5rem;
		}
	}

	.text-wrapper {
		max-width: 45rem;

		@media (min-width: ${sizes.mdBreakMin}) {
			max-width: 100%;
			width: 50%;
		}

		h3 {
			margin: 1.3em 0;
			text-align: center;

			@media (min-width: ${sizes.mdBreakMin}) {
				margin-top: 0;
				text-align: left;
			}
		}

		p {
			text-align: center;

			@media (min-width: ${sizes.mdBreakMin}) {
				text-align: left;
			}
		}
	}

	&.rtl {
		@media (min-width: ${sizes.mdBreakMin}) {
			.text-wrapper {
				order: 1;
			}

			.image-wrapper {
				order: 2;
			}
		}
	}
`;
