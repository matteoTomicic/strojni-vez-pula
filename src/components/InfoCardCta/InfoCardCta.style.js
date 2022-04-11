import styled from "styled-components";
import { colors, sizes } from "@global/styles";

export const StyledInfoCardCta = styled.section`
	background: ${colors.themeGreyDarken};
	padding: 4vw 0;

	.container {
		@media (min-width: ${sizes.mdBreakMin}) {
			justify-content: space-between;
		}
	}

	h2 {
		max-width: 38rem;
		margin: 0 auto;
		text-align: center;
		font-style: italic;

		@media (min-width: ${sizes.mdBreakMin}) {
			max-width: 52rem;
			margin: 0;
			text-align: left;
		}
	}

	.image {
		&-sp {
			margin: 2rem auto;
			display: flex;
			max-width: 43rem;

			@media (min-width: ${sizes.mdBreakMin}) {
				display: none;
			}
		}

		&-dt {
			display: none;
			width: 45%;
			align-self: center;

			@media (min-width: ${sizes.mdBreakMin}) {
				display: block;
			}
		}

		img {
			border-radius: 0.5rem;
		}
	}

	.content {
		@media (min-width: ${sizes.mdBreakMin}) {
			width: 50%;
			align-self: center;
		}

		.ctaBox {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;

			@media (min-width: ${sizes.mdBreakMin}) {
				justify-content: flex-start;
			}

			p {
				color: ${colors.darkTxtGreyBackground};
				text-align: center;
				max-width: 50rem;

				@media (min-width: ${sizes.mdBreakMin}) {
					text-align: left;
					max-width: unset;
					margin: 2rem 0;
				}
			}

			.cta {
				margin-top: 2rem;

				@media (min-width: ${sizes.mdBreakMin}) {
					margin-top: 0;
				}
			}
		}
	}

	&.rtl {
		.content {
			@media (min-width: ${sizes.mdBreakMin}) {
				order: 1;
			}
		}

		.image {
			@media (min-width: ${sizes.mdBreakMin}) {
				order: 2;
			}
		}
	}
`;
