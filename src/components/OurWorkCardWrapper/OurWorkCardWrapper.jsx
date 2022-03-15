import { useState, useEffect } from "react";

import images from "@constants/image.constants";
import content from "@constants/content.constants";
import { StyledOurWorkCardWrapper } from "@components/OurWorkCardWrapper/OurWorkCardWrapper.style";
import OurWorkCard from "@components/OurWorkCardWrapper/OurWorkCard/OurWorkCard";
import ProductsModal from "@components/OurWorkCardWrapper/ProductsModal/ProductsModal";

const OurWorkCardWrapper = () => {
	const [showModal, setShowModal] = useState(false);

	useEffect(() => {
		document.body.classList.toggle("modal-shown", showModal);
	}, [showModal]);

	const handleShowModal = () => {
		setShowModal(!showModal);
	};

	return (
		<StyledOurWorkCardWrapper>
			<ProductsModal className={showModal ? "shown" : null} closeModal={handleShowModal} />
			<div className="container">
				<OurWorkCard handleShowModal={handleShowModal} cardImage={images.ourWorkImages.vezNaMajiceIKape} cardTitle={content.ourWork.vezovi} />
				<OurWorkCard handleShowModal={handleShowModal} cardImage={images.ourWorkImages.strojniVezPlatnenaTorbaPula} cardTitle={content.ourWork.ekoVrecice} />
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
