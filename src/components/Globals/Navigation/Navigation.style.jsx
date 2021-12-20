import styled from "styled-components";
import { above, below, colors, rem } from "@global/styles";

export const StyledNavigation = styled.div`
    .nav {
        box-shadow: 0 ${rem(4)} ${rem(10)} ${rem(-5)} rgba(0, 0, 0, 0.25);

        .nav__toggler-logo {
            width: 100%;
            display: flex;
            align-items: center;
            padding: 0 ${rem(30)};

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

                &.active {
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

                @media (min-width: ${above(768)}) {
                    display: none;
                }
            }

            @media (min-width: ${above(768)}) {
                width: 20%;
                padding: ${rem(5)} 0;
                margin-right: auto;
            }

            @media (min-width: ${above(992)}) {
                padding: ${rem(10)} 0;
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
                font-weight: 700;
                font-size: ${rem(18)};
                color: ${colors.darkTxtColor};
                padding: ${rem(20)} 0 ${rem(20)} ${rem(30)};
                transform: translateX(-100%);

                &:nth-child(even) {
                    background: ${colors.themeGreyDarken};
                }

                &:nth-child(odd),
                &:nth-child(even) {
                    @media (min-width: ${above(768)}) {
                        background: none;
                    }
                }

                &::before {
                    content: "";
                    display: block;
                    position: absolute;
                    left: 0;
                    width: ${rem(10)};
                    height: 0;
                    background: ${colors.red};
                    transition: width 0.3s ease-in-out;

                    @media (min-width: ${above(768)}) {
                        height: ${rem(4)};
                        bottom: ${rem(-6)};
                        width: 0;
                    }
                }

                &.currentPage {
                    &::before {
                        @media (max-width: ${below(767)}) {
                            height: 100%;
                        }

                        @media (min-width: ${above(768)}) {
                            width: 100%;
                        }
                    }
                }

                &:not(.currentPage) {
                    &:hover {
                        &::before {
                            width: 100%;
                        }
                    }
                }

                + .nav__item {
                    @media (min-width: ${above(768)}) {
                        margin-left: 3vw;
                    }

                    @media (min-width: ${above(992)}) {
                        margin-left: 4vw;
                    }
                }

                @media (min-width: ${above(768)}) {
                    transform: none;
                    padding: 0;
                    width: auto;
                }
            }

            &.nav__items--shown {
                opacity: 1;
                height: auto;

                .nav__item {
                    transform: translateX(0);
                }
            }

            @media (min-width: ${above(768)}) {
                opacity: 1;
                height: auto;
                width: 75%;
                flex-direction: row;
                justify-content: flex-end;
                transition: none;
            }
        }
    }
`;
