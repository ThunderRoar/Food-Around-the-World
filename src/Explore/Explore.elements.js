import styled from "styled-components";

export const BackgroundFillerColor = styled.div`
  background-color: #292929;  
  position: absolute;
  border; 3px solid red;
  z-index: -2;
  width: 100%;
  height: 100%;
`;

export const MapHolder = styled.div`
  background-color: white;
  height: 450px;
  width: 1200px;
`;

export const Logo = styled.img`
  position:absolute;
  bottom: 15px;
  right: 15px;
  height: 26px;
`;

export const DescriptionText = styled.h2`
  font-family: "Outfit", sans-serif;
  color: #fff;
  font-weight: normal;
  font-size: 35px;
  line-height: 1.2;
`;

export const MainDiv = styled.div`
  width: 1200px;
  position: absolute;
  top: 10%;
  left: 11%;
  display: relative;
  text-align: center;
`;