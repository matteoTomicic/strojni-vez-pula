import styled from "styled-components";
import { sizes } from "@global/styles";

export const StyledHomepageBanner = styled.div`
	.homepageBanner {
		position: relative;

		.homepageBanner__image {
			filter: brightness(40%);
		}

		.homepageBanner__content {
			position: relative;
			z-index: 999;
			padding: 6vw 0;

			.homepageBanner__content-heading {
				margin-bottom: 4vw;
				color: white;
				font-size: calc(2.4rem + (48 - 24) * ((100vw - 37.5rem) / (1400 - 375)));
			}

			.homepageBanner__content-info {
				margin-bottom: 5vw;
				line-height: 1.3em;
				color: white;
				font-size: calc(1.4rem + (18 - 14) * ((100vw - 37.5rem) / (1400 - 375)));
				width: clamp(31.5rem, 55vw, 65rem);
			}

			.homepageBanner__content-cta {
				display: flex;
				flex-wrap: wrap;
				max-width: 36rem;

				.cta {
					font-size: calc(1.4rem + (18 - 14) * ((100vw - 37.5rem) / (1400 - 375)));

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
	}
`;
