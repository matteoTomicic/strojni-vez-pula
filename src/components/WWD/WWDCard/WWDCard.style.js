import styled from "styled-components";
import { colors, sizes } from "@global/styles";

export const StyledWWDCard = styled.div`
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

    h2 {
        text-align: center;
        font-size: calc(1.8rem + (24 - 18) * ((100vw - 37.5rem) / (1900 - 375)));
        line-height: 1.2em;
        color: ${colors.darkTxtColor};
        margin: 1em 0 1em 0;
        max-width: 60vw;
    }

    p {
        text-align: center;
        font-size: calc(1.4rem + (18 - 14) * ((100vw - 37.5rem) / (1900 - 375)));
        line-height: 1.2em;
        color: ${colors.lightTxtColor};
        max-width: 80vw;
    }
`;