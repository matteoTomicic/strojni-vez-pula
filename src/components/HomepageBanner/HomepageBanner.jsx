/* eslint-disable jsx-a11y/alt-text */
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
					<h1 className="homepageBanner__contentHeading">Strojni vez</h1>
					<p className="homepageBanner__contentInfo">
						Obrt koji se bavi izradom programa za vezenje te strojnim vezenjem na sve vrste tkanina, odjevne predmete, kape, ručnike, posteljinu te stolnjake, a osim toga bavimo se i
						šivanjem jastučića, posteljina te raznih modnih dodataka.
					</p>
					<div className="homepageBanner__contentCta">
						<CtaButton href="/kontakt" className="cta--red" linkTitle="Javite nam se" />
						<CtaButton href="/nasi-radovi" className="cta--white" linkTitle="Pogledajte naše radove" />
					</div>
				</div>
			</div>
		</div>
	</StyledHomepageBanner>
);

export default HomepageBanner;
