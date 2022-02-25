import styled from "styled-components";

export const StyledContactUsSection = styled.section`
    padding: 0 0 4vw 0;

    .container {
        &-column {
            align-items: center;
        }
    }

    h2 {
        text-align: center;
        width: clamp(29.8rem, 80vw, 103rem);
    }

    p {
        text-align: center;
        margin: 2vw 0;
        width: clamp(29.8rem, 65vw, 65rem);
    }
`;