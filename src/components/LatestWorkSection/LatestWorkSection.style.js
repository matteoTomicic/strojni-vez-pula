import styled from "styled-components";
import { sizes } from "@global/styles";

export const StyledLatestWorkSection = styled.section`
	padding: 4vw 0;

	h2 {
		text-align: center;
		width: 100%;
		margin-bottom: 4vw;

		@media (min-width: ${sizes.mdBreakMin}) {
			text-align: left;
		}
	}
`;