import styled from "styled-components";
import { colors, sizes } from "@global/styles";

export const StyledWhatWeDo = styled.section`
	padding:  4vw 0;

	.container {
		flex-direction: column;

		@media (min-width: ${sizes.lgBreakMin}) {
			flex-direction: row;
			justify-content: space-between;
		}
	}

	h2 {
		text-align: center;
		width: 100%;
		color: ${colors.darkTxtColor};
		margin-bottom: 4vw;
	}
`;
