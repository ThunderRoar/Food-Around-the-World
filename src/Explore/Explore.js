import React from "react";

//Styled Components
import {
  BackgroundFillerColor,
  DescriptionText,
  MainDiv,
  MapHolder,
  Logo,
} from "./Explore.elements";

import TransparentLogo from "../images/global-grub-high-resolution-logo-transparent-background.png";

const Explore = () => {
  return (
    <>
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
