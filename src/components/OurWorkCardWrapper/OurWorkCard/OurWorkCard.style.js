import styled from "styled-components";
import { colors, sizes } from "@global/styles";

export const StyledOurWorkCard = styled.div`
	display: flex;
	flex-direction: column;
	cursor: pointer;

	&:hover {
		img {
			transform: scale(1.05);
		}
	}

	img {
		transition: all 0.5s ease-in-out;
	}

	div {
		background: ${colors.themeGreenLight};
	}

	p {
		font-weight: bold;
		color: ${colors.darkTxtColor};
		text-align: center;
		padding: 1.2em 0;
	}
`;
