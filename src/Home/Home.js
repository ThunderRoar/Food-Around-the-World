import React from "react";

//Styled Components
import {
  HomePageBackground,
  BackgroundFillerColor,
  MainDiv,
  Logo,
  DescriptionText,
  HungryButton,
  HungryLink
} from "./Home.elements";

import TransparentLogo from "../images/global-grub-high-resolution-logo-transparent-background.png";
import BackgroundImage from "../images/homepage-background.jpeg";

import { GiKnifeFork } from "react-icons/gi";

const Home = () => {
  return (
    <>
      <HomePageBackground src={BackgroundImage}></HomePageBackground>
      <BackgroundFillerColor></BackgroundFillerColor>
      <MainDiv>
        <Logo src={TransparentLogo}></Logo>
        <DescriptionText>
          Explore Diverse Foods From Around the World!
        </DescriptionText>
        <HungryLink to='/explore'>
          <HungryButton>
            <GiKnifeFork style={{ marginTop: "3px", marginRight: "15px" }} />
            I'm Hungry!
          </HungryButton>
        </HungryLink>
      </MainDiv>
    </>
  );
};

export default Home;
