import React, { useState } from "react";

//Styled Components
import {
  BackgroundFillerColor,
  DescriptionText,
  MainDiv,
  MapHolder,
  Logo,
} from "./Explore.elements";

import { Modal } from "../Modal/Modal";

import TransparentLogo from "../images/global-grub-high-resolution-logo-transparent-background.png";

const Explore = () => {
  const [showModal, setShowModal] = useState(false);
  const [chosenCountry] = useState("Italian");
  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <button onClick={openModal}>Toggle Me</button>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        chosenCountry={chosenCountry}
      ></Modal>
      <BackgroundFillerColor></BackgroundFillerColor>
      <MainDiv>
        <MapHolder></MapHolder>
        <DescriptionText>
          Click on a country to uncover the dishes untold.
        </DescriptionText>
        {/* Add the map segment here */}
      </MainDiv>
      <Logo src={TransparentLogo}></Logo>
    </>
  );
};

export default Explore;
