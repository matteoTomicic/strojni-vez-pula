import styled from "styled-components";
import { StyledOurWorkCard } from "@components/OurWorkCardWrapper/OurWorkCard/OurWorkCard.style";
import { sizes } from "@global/styles";

export const StyledOurWorkCardWrapper = styled.section`
	padding: 4vw 0;

	.container {
		flex-direction: column;
		align-items: center;

		@media (min-width: ${sizes.smBreakMin}) {
			flex-direction: row;
			justify-content: space-around;
			gap: 2rem;
		}

		@media (min-width: ${sizes.lgBreakMin}) {
			justify-content: space-between;
		}
	}

	${StyledOurWorkCard} {
		+ ${StyledOurWorkCard} {
			margin-top: 2rem;

			@media (min-width: ${sizes.smBreakMin}) {
				margin-top: 0;
			}
		}
	}
`;
