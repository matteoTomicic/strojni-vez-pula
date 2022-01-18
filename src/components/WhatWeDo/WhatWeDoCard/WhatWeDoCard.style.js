import styled from "styled-components";
import { colors, sizes } from "@global/styles";

export const StyledWhatWeDoCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: ${sizes.lgBreakMin}) {
        width: 30%;
    }

    &:not(:last-child) {
        margin-bottom: 4rem;

        @media (min-width: ${sizes.lgBreakMin}) {
            margin-bottom: 0;
        }
    }

    h3 {
        text-align: center;
        line-height: 1.2em;
        color: ${colors.darkTxtColor};
        margin: 1em 0 1em 0;
        max-width: 60vw;
    }

    p {
        text-align: center;
        line-height: 1.2em;
        color: ${colors.lightTxtColor};
        max-width: 80vw;
    }
`;