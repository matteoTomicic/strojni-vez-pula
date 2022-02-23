/* eslint-disable jsx-a11y/alt-text */
import { home, btnContent } from "@constants/content.constants";
import { StyledHomepageBanner } from "@components/HomepageBanner/HomepageBanner.style";
import CtaButton from "@UI/CtaButton";
import images from "@constants/image.constants";
import Image from "next/image";

const HomepageBanner = () => (
	<StyledHomepageBanner>
		<div className="homepageBanner">
			<Image {...images.banners.homepageBanner} className="homepageBanner__image" />
			<div className="container">
				<div className="homepageBanner__content">
					<h1 className="homepageBanner__contentHeading">{home.content.bannerTitle}</h1>
					<p className="homepageBanner__contentInfo">{home.content.bannerInfo}</p>
					<div className="homepageBanner__contentCta">
						<CtaButton href="/kontakt" className="cta--red" linkTitle={btnContent.contactUsBtn} />
						<CtaButton href="/nasi-radovi" className="cta--white" linkTitle={btnContent.ourWorkBtn} />
					</div>
				</div>
			</div>
		</div>
	</StyledHomepageBanner>
);

export default HomepageBanner;
