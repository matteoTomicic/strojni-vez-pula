import styled from "styled-components";
import { colors, sizes } from "@global/styles";

export const StyledContactCardMini = styled.div`
	background: ${colors.themeGreenLight};
	padding: 2rem;
	border-radius: 0.5rem;
	width: 35rem;

	@media (min-width: ${sizes.mdBreakMin}) {
		width: 33rem;
	}

	@media (min-width: ${sizes.lgBreakMin}) {
		width: 32%;
	}

	& + & {
		margin-top: 1.5rem;

		@media (min-width: ${sizes.mdBreakMin}) {
			margin-top: 0;
		}
	}

	&:last-child {
		@media (min-width: ${sizes.mdBreakMin}) {
			margin-top: 1.8rem;
		}

		@media (min-width: ${sizes.lgBreakMin}) {
			margin-top: 0;
		}
	}

	p {
		margin-top: 4em;
		font-weight: bold;
		color: ${colors.lightTxtColor};
		text-decoration: underline;
	}
`;
