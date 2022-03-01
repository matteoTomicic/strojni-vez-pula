import styled from "styled-components";

export const StyledHeroBanner = styled.section`
	position: relative;

	img {
		filter: brightness(35%);
	}

	div {
		position: relative;
		z-index: 999;
		padding: clamp(8rem, 10vw, 18rem) 0;
	}

	h1 {
		color: white;
		text-align: center;
	}
`;
