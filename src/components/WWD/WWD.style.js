import styled from "styled-components";
import { colors, sizes } from "@global/styles";

export const StyledWWD = styled.section`
	padding:  4vw 0;

	.container {
		flex-direction: column;

		@media (min-width: ${sizes.lgBreakMin}) {
			flex-direction: row;
			justify-content: space-between;
		}
	}

	h1 {
		font-size: calc(2.4rem + (36 - 24) * ((100vw - 37.5rem) / (1900 - 375)));
		text-align: center;
		width: 100%;
		color: ${colors.darkTxtColor};
		margin-bottom: 4vw;
	}
`;
