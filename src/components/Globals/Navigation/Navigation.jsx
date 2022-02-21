/* eslint-disable jsx-a11y/alt-text */
import { useRouter } from "next/router";
import { useState } from "react";
import { StyledNavigation } from "@components/Globals/Navigation/Navigation.style";
import Image from "next/image";
import images from "@constants/image.constants";
import navLinks from "@constants/navigation.constants";

const Navigation = () => {
	const router = useRouter();
	const [toggler, setToggler] = useState(false);
	const [isShown, setShown] = useState(false);

	const toggleMenuIcon = () => {
		setToggler(!toggler);
	};

	const toggleNav = () => {
		setShown(!isShown);
	};

	const togglerClick = () => {
		toggleMenuIcon();
		toggleNav();
	};

	const isPageActive = (route) => (route == router.pathname ? "currentPage" : "");

	return (
		<StyledNavigation>
			<div className="nav">
				<div className="container">
					<div className="togglerLogo">
						<div onClick={togglerClick} className={["toggler", toggler ? "active" : ""].join(" ")}>
							<span></span>
						</div>
						<Image {...images.logo} />
					</div>
					<nav className={["nav-items", isShown ? "nav-items-shown" : ""].join(" ")}>
						{navLinks.map((navItem, index) => {
							return (
								<a key={index} href={navItem.path} title={navItem.title} className={["nav-item", isPageActive(navItem.path)].join(" ")}>
									{navItem.name}
								</a>
							);
						})}
					</nav>
				</div>
			</div>
		</StyledNavigation>
	);
};

export default Navigation;
