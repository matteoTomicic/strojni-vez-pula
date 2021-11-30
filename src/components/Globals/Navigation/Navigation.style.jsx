import styled from "styled-components";
import { colors, rem } from "../../../styles";

export const StyledNavigation = styled.div`
    .nav {
        box-shadow: 0 ${rem(4)} ${rem(10)} ${rem(-5)} rgba(0, 0, 0, 0.25);

        .nav__toggler-logo {
            width: 100%;
            display: flex;
            align-items: center;

            .nav__toggler {
                display: flex;
                align-items: center;
                width: ${rem(36)};
                height: ${rem(42)};
                margin-right: auto;

                span {
                    position: relative;
                    display: block;

                    &::before,
                    &::after {
                        content: "";
                        position: absolute;
                        left: 0;
                        top: ${rem(-9)};
                    }

                    &:after {
                        top: ${rem(9)};
                    }
                }

                span,
                span::before,
                span::after {
                    width: 100%;
                    height: ${rem(2)};
                    background-color: ${colors.darkTxtColor};
                    transition: all 0.3s ease-out;
                }

                &.opened {
                    span {
                        background-color: transparent;
                        &::before {
                            transform: rotate(45deg) translate(${rem(5)}, ${rem(5)});
                        }
                        &::after {
                            transform: rotate(-45deg) translate(${rem(7)}, ${rem(-8)});
                        }
                    }
                }
            }
        }

        .nav__items {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            opacity: 0;
            height: 0;
            transition: all 0.7s ease-in-out;

            .nav__item {
                width: 100%;
                display: flex;
                align-items: center;
                position: relative;
                font-weight: 800;
                font-size: ${rem(18)};
                color: ${colors.darkTxtColor};
                padding: ${rem(20)} 0 ${rem(20)} ${rem(30)};
                transform: translateX(-100%);

                &:nth-child(odd) {
                    background: ${colors.themeBubbles};
                }

                &:nth-child(even) {
                    background: ${colors.themeAzureWhite};
                }

                &.currentPage {
                    &::before {
                        content: "";
                        display: block;
                        position: absolute;
                        left: 0;
                        width: ${rem(10)};
                        height: 100%;
                        background: ${colors.red};
                    }
                }
            }

            &.nav__items--shown {
                opacity: 1;
                height: auto;

                .nav__item {
                    transform: translateX(0);
                }
            }
        }
    }
`;
