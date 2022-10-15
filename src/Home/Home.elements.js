import styled from "styled-components";
import { Link } from "react-router-dom";

export const HomePageBackground = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.25;
  z-index: -1;
`;

export const BackgroundFillerColor = styled.div`
  background-color: #333333;  
  position: absolute;
  border; 3px solid red;
  z-index: -2;
  width: 100%;
  height: 100%;
`;

export const MainDiv = styled.div`
  width: 60%;
  position: absolute;
  top: 22%;
  left: 10%;
  display: relative;
`;

export const Logo = styled.img`
  height: 120px;
`;

export const DescriptionText = styled.h1`
  font-family: "Outfit", sans-serif;
  color: #fff;
  font-weight: normal;
  font-size: 50px;
  line-height: 1.3;
`;

export const HungryLink = styled(Link)`
  text-decoration: none;
`;

export const HungryButton = styled.button`
  font-family: "Outfit", sans-serif;
  color: #fff;
  background-color: #8ec185;
  cursor: pointer;
  font-size: 30px;
  padding: 10px 35px;
  transition: background-color 0.1s;
  border-radius: 15px;
  border: none;
  display: flex;
  justify-content: space-around;
  margin-top: 60px;


  &:hover {
    background-color: grey;
  }
`;
