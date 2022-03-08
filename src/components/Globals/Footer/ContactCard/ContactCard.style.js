import styled from "styled-components";
import { colors } from "@global/styles";

export const StyledContactCard = styled.div`
	& + & {
		margin-top: 1.2rem;
	}

	display: flex;
	align-items: center;

	p {
		color: ${colors.darkTxtColor};
		margin-left: 0.7em;
	}
`;
