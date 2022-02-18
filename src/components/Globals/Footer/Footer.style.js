import styled from "styled-components";
import { colors, sizes } from "@global/styles";

export const StyledFooter = styled.section`
	background-color: ${colors.themeGreenLight};
	padding: 4vw 0;

	@media (min-width: ${sizes.mdBreakMin}) {
		padding-bottom: 1vw;
	}

	.container {
		@media (min-width: ${sizes.mdBreakMin}) {
			justify-content: space-between;
		}
	}

	.footer__section {
		width: 100%;

		@media (min-width: ${sizes.mdBreakMin}) {
			width: 45%;
		}

		@media (min-width: ${sizes.lgBreakMin}) {
			width: 25%;
		}

		+ .footer__section {
			margin-top: 2.6rem;

			@media (min-width: ${sizes.lgBreakMin}) {
				margin-top: 0;
			}
		}

		&.footer__section--aboutUs {
			p {
				max-width: 35rem;
			}
		}

		&.footer__section--links {
			@media (min-width: ${sizes.mdBreakMin}) {
				margin-top: 0;
				width: 35%;
			}

			@media (min-width: ${sizes.lgBreakMin}) {
				width: 15%;
			}

			.links__items {
				display: flex;
				flex-direction: column;
			}

			.links__item {
				+ .links__item {
					margin-top: 0.5em;
					color: ${colors.darkTxtColor};
				}
			}
		}

		&.footer__section--socialMedia {
			display: flex;
			flex-wrap: wrap;

			@media (min-width: ${sizes.mdBreakMin}) {
				width: 35%;
				display: block;
			}

			@media (min-width: ${sizes.lgBreakMin}) {
				width: 20%;
			}

			.socialIcon-wrapper {
				@media (min-width: ${sizes.mdBreakMin}) {
					display: inline-block;
				}

				a {
					display: flex;
				}

				+ .socialIcon-wrapper {
					margin-left: .8rem;
				}
			}
		}

		&.footer__section--disclaimer {
			margin-top: 4rem;

			@media (min-width: ${sizes.mdBreakMin}) {
				width: 100%;
			}

			@media (min-width: ${sizes.lgBreakMin}) {
				margin-top: 5.5rem;
			}

			p {
				text-align: center;

				a {
					text-decoration: underline;
					font-weight: bold;
				}
			}
		}
	}

	h3 {
		margin-bottom: 0.5em;
		width: 100%;
		font-size: 1.8rem;
	}

	p {
		color: ${colors.darkTxtColor};
		font-size: 1.4rem;
	}

	a {
		font-size: 1.4rem;
	}
`;
