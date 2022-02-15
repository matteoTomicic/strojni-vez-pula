import styled from "styled-components";
import { sizes } from "@global/styles";

export const StyledHomepageBanner = styled.section`
	.homepageBanner {
		position: relative;

		&__image {
			filter: brightness(35%);
		}

		&__content {
			position: relative;
			z-index: 999;
			padding: 7vw 0;
		}

		&__contentHeading {
				margin-bottom: 4vw;
				color: white;
		}

		&__contentInfo {
				margin-bottom: 5vw;
				line-height: 1.3em;
				color: white;
				width: clamp(31.5rem, 55vw, 65rem);
		}

		&__contentCta {
				display: flex;
				flex-wrap: wrap;
				max-width: 36rem;

				.cta {
					+ .cta {
						margin-top: 1em;

                        @media (min-width: ${sizes.mdBreakMin}) {
                            margin-top: 0;
                            margin-left: 1em;
                        }
					}
				}

                @media (min-width: ${sizes.mdBreakMin}) {
                    flex-direction: row;
                    max-width: unset;
                }
		}
	}
`;
