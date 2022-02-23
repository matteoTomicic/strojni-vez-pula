/* eslint-disable jsx-a11y/alt-text */
import { home, btnContent } from "@constants/content.constants";
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
					<h2>{home.content.aboutUsBriefSectionTitle}</h2>
					<div className="AboutUsBrief__image AboutUsBrief__image--sp">
						<Image {...images.banners.konciZaVezenje} />
					</div>
					<div className="AboutUsBrief__ctaBox">
						<p>{home.content.aboutUsBriefSectionInfo}</p>
						<CtaButton href="/o-nama" className="cta--dark" linkTitle={btnContent.aboutUsBtn} />
					</div>
				</div>
			</div>
		</StyledAboutUsBrief>
	);
};

export default AboutUsBrief;
