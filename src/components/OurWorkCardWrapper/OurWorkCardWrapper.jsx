import { useState, useEffect } from "react";

import images from "@constants/image.constants";
import content from "@constants/content.constants";
import { StyledOurWorkCardWrapper } from "@components/OurWorkCardWrapper/OurWorkCardWrapper.style";
import OurWorkCard from "@components/OurWorkCardWrapper/OurWorkCard/OurWorkCard";
import ProductsModal from "@components/OurWorkCardWrapper/ProductsModal/ProductsModal";
import { allCategories } from "@global/mocks/ProductsGalleryImages";

const OurWorkCardWrapper = () => {
	const [showModal, setShowModal] = useState(false);

	const [items, setItems] = useState();

	useEffect(() => {
		document.body.classList.toggle("modal-shown", showModal);
	}, [showModal]);

	const handleShowModal = (categoryId) => {
		setItems(allCategories[categoryId]);
		setShowModal(!showModal);
	};

	return (
		<StyledOurWorkCardWrapper>
			<ProductsModal items={items} className={showModal ? "shown" : null} closeModal={() => setShowModal(false)} />
			<div className="container">
				<OurWorkCard handleShowModal={() => handleShowModal(1)} cardImage={images.ourWorkImages.vezNaMajiceIKape} cardTitle={content.ourWork.vezovi} />
				<OurWorkCard handleShowModal={() => handleShowModal(2)} cardImage={images.ourWorkImages.strojniVezPlatnenaTorbaPula} cardTitle={content.ourWork.ekoVrecice} />
				<OurWorkCard handleShowModal={() => handleShowModal(3)} cardImage={images.ourWorkImages.poklonPaketi} cardTitle={content.ourWork.poklonPaketi} />
				<OurWorkCard handleShowModal={() => handleShowModal(4)} cardImage={images.ourWorkImages.rucnici} cardTitle={content.ourWork.rucnici} />
				<OurWorkCard handleShowModal={() => handleShowModal(5)} cardImage={images.ourWorkImages.gumiceZaKosu} cardTitle={content.ourWork.trakeGumiceZaKosu} />
				<OurWorkCard handleShowModal={() => handleShowModal(6)} cardImage={images.ourWorkImages.izradaPersonaliziranihRuksaka} cardTitle={content.ourWork.ruksaci} />
				<OurWorkCard handleShowModal={() => handleShowModal(7)} cardImage={images.ourWorkImages.vrecicaLavanda} cardTitle={content.ourWork.vreciceSLavandom} />
				<OurWorkCard handleShowModal={() => handleShowModal(8)} cardImage={images.ourWorkImages.maskeLogo} cardTitle={content.ourWork.ostalo} />
			</div>
		</StyledOurWorkCardWrapper>
	);
};

export default OurWorkCardWrapper;
