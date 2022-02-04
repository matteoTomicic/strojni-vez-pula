import styled from "styled-components";
import { sizes } from "@global/styles";

export const StyledOurWorkHomepageSection = styled.section`
	padding: 4vw 0;

	.container {
		justify-content: center;

		&--column {
			align-items: center;
		}
	}

	h2 {
		text-align: center;
		width: 100%;

		@media (min-width: ${sizes.mdBreakMin}) {
			text-align: left;
		}
	}

	.carouselBlock {
		margin: 4vw 0;
	}

	h2 {
		text-align: center;
		width: clamp(29.8rem, 70vw, 70rem);
	}

	p {
		text-align: center;
		width: clamp(29.8rem, 65vw, 64rem);
		margin: 2rem 0;
	}
`;