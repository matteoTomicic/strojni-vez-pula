import images from "@constants/image.constants";
import content from "@constants/content.constants";
import { StyledOurWorkCardWrapper } from "@components/OurWorkCardWrapper/OurWorkCardWrapper.style";
import OurWorkCard from "@components/OurWorkCardWrapper/OurWorkCard/OurWorkCard";

const OurWorkCardWrapper = () => {
	return (
		<StyledOurWorkCardWrapper>
			<div className="container">
				<OurWorkCard cardImage={images.ourWorkImages.vezNaMajiceIKape} cardTitle={content.ourWork.vezovi} />
				<OurWorkCard cardImage={images.ourWorkImages.strojniVezPlatnenaTorbaPula} cardTitle={content.ourWork.ekoVrecice} />
				<OurWorkCard cardImage={images.ourWorkImages.poklonPaketi} cardTitle={content.ourWork.poklonPaketi} />
				<OurWorkCard cardImage={images.ourWorkImages.rucnici} cardTitle={content.ourWork.rucnici} />
				<OurWorkCard cardImage={images.ourWorkImages.gumiceZaKosu} cardTitle={content.ourWork.trakeGumiceZaKosu} />
				<OurWorkCard cardImage={images.ourWorkImages.izradaPersonaliziranihRuksaka} cardTitle={content.ourWork.ruksaci} />
				<OurWorkCard cardImage={images.ourWorkImages.vrecicaLavanda} cardTitle={content.ourWork.vreciceSLavandom} />
				<OurWorkCard cardImage={images.ourWorkImages.maskeLogo} cardTitle={content.ourWork.ostalo} />
			</div>
		</StyledOurWorkCardWrapper>
	);
};

export default OurWorkCardWrapper;
