import { StyledHomepageBanner } from "@components/HomepageBanner/HomepageBanner.style";
import CtaButton from "@components/UI/CtaButton";
import images from "@global/constants/image.constants";
import Image from "next/image";

const HomepageBanner = () => {
	return (
		<StyledHomepageBanner>
			<section className="homepageBanner">
				<Image
					src={images.banners.homepageBanner.src}
					alt={images.banners.homepageBanner.alt}
					title={images.banners.homepageBanner.title}
					layout="fill"
					objectFit="cover"
					objectPosition="right bottom"
					priority
					quality={100}
					className="homepageBanner__image"
				/>
				<div className="container">
				<div className="homepageBanner__content">
					<h1 className="homepageBanner__content-heading">Strojni vez</h1>
					<p className="homepageBanner__content-info">
						Obrt koji se bavi izradom programa za vezenje te strojnim vezenjem na sve vrste tkanina, odjevne predmete, kape, ručnike, posteljinu te stolnjake, a osim toga bavimo se i
						šivanjem jastučića, posteljina te raznih modnih dodataka.
					</p>
					<div className="homepageBanner__content-cta">
						<CtaButton href="/kontakt" className="cta--red" linkTitle="Javite nam se" />
						<CtaButton href="/nasi-radovi" className="cta--white" linkTitle="Pogledajte naše radove" />
					</div>
				</div>
				</div>
			</section>
		</StyledHomepageBanner>
	);
};

export default HomepageBanner;
