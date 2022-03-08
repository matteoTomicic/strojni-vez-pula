import styled from "styled-components";
import { sizes } from "@global/styles";

export const StyledContactCardMiniWrapper = styled.section`
	padding-bottom: 4vw;

	.container {
		justify-content: center;

		@media (min-width: ${sizes.mdBreakMin}) {
			justify-content: space-evenly;
		}

        @media (min-width: ${sizes.lgBreakMin}) {
            justify-content: space-between;
        }
	}
`;
