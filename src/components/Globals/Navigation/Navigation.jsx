import { useRouter } from "next/router";
import { useState } from "react";
import { StyledNavigation } from "@components/Globals/Navigation/Navigation.style";
import Image from "next/image";
import images from "@constants/image.constants";
import navLinks from "@constants/navigation.constants";

const Navigation = () => {
    const router = useRouter();
    const [toggled, toggle] = useState(false);
    const [shown, show] = useState(false);

    const toggleMenuIcon = () => {
        toggle(!toggled);
    };

    const toggleNav = () => {
        show(!shown);
    };

    const togglerClick = () => {
        toggleMenuIcon();
        toggleNav();
    };

    const isPageActive = (route) => (route == router.pathname ? "currentPage" : "");

    return (
        <StyledNavigation>
            <header className="nav">
                <div className="container">
                    <div className="nav__toggler-logo">
                        <div onClick={togglerClick} className={`nav__toggler ${toggled ? "active" : ""}`}>
                            <span></span>
                        </div>
                        <Image src={images.logo.src} width={images.logo.width} height={images.logo.height} alt={images.logo.alt} title={images.logo.title} priority />
                    </div>
                    <nav className={`nav__items ${shown ? "nav__items--shown" : ""}`}>
                        {navLinks.map((navItem, index) => {
                            return (
                                <a key={index} href={navItem.path} title={navItem.title} className={`nav__item ${isPageActive(navItem.path)}`}>
                                    {navItem.name}
                                </a>
                            );
                        })}
                    </nav>
                </div>
            </header>
        </StyledNavigation>
    );
};

export default Navigation;
