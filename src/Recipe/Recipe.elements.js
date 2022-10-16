import styled from "styled-components";

export const BackgroundFillerColor = styled.div`
  background-color: #292929;  
  position: absolute;
  border; 3px solid red;
  z-index: -2;
  width: 100%;
  height: 100%;
`;

export const MainDiv = styled.div`
  width: 1200px;
  position: absolute;
  top: 10%;
  left: 11%;
  display: relative;
  text-align: center;
  border: 3px solid red;
`;

export const TitleDiv = styled.div`
  text-align: center;
  padding: 20px;

`;

export const Title = styled.h1`
  font-family: "Outfit", sans-serif;
  font-weight: normal;
  font-size: 50px;
  text-align: center;
  margin: 0;
  margin-bottom: 10px;
`;

export const Description = styled.p`
`;

export const Image = styled.img`
  height: 400px;
  margin-left: 100px;

  border-radius: 10px;
  background-size: cover;
`;

export const ImageDiv = styled.div`
  width: 100%;
  align-items: center;

`;

export const Instructions = styled.p`

`;