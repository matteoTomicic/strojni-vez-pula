/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import images from "@constants/image.constants";
import { StyledAboutUsBrief } from "@components/AboutUsBrief/AboutUsBrief.style";
import CtaButton from "@UI/CtaButton";

const AboutUsBrief = () => {
	return (
		<StyledAboutUsBrief className="AboutUsBrief">
			<div className="container">
				<div className="AboutUsBrief__image AboutUsBrief__image--dt">
					<Image {...images.banners.konciZaVezenje} />
				</div>
				<div className="AboutUsBrief__content">
					<h2>Preko 20 godina iskustva strojnog vezenja.</h2>
					<div className="AboutUsBrief__image AboutUsBrief__image--sp">
						<Image {...images.banners.konciZaVezenje} />
					</div>
					<div className="AboutUsBrief__ctaBox">
						<p>
							Strojno vezenje radimo sa Ricoma mašinama, jednim od najpoznatihjih brendova na tržištu. Osim toga, radimo sa najkvalitetnijim Madeira koncima koji su specijalizirani za
							strojno vezenje te se ne ispiru niti pucaju tijekom pranja, već traju.
						</p>
						<CtaButton href="/o-nama" className="cta--dark" linkTitle="Pogledajte više o nama" />
					</div>
				</div>
			</div>
		</StyledAboutUsBrief>
	);
};

export default AboutUsBrief;
