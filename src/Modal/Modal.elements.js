import styled from "styled-components";
import { Link } from "react-router-dom";
import { ImCross } from "react-icons/im";


export const ModalContainer = styled.div`
  width: 60%;
  position: absolute;
  top: 22%;
  left: 16%;
  display: relative;
  border: 5px solid #333333;
  border-radius: 30px;
  padding: 20px 10px;

  background: rgb(255,255,255);
background: radial-gradient(circle, rgba(255,255,255,1) 8%, rgba(157,224,173,1) 100%);
`;

export const TopText = styled.h1`
  font-family: "Outfit", sans-serif;
  font-weight: normal;
  font-size: 50px;
  text-align: center;
  margin: 0;
  margin-bottom:10px;

`;

export const DishDiv = styled.div`
  display: inline-block;
  width: 100%;
`;

export const TitleDiv = styled.div`
  float: right;
  width: 500px;
  height: 150px;
  line-height: 150px;
  text-align: center;
`;
export const Title = styled.span`
  display: inline-block;
  vertical-align: middle;
  line-height: normal;
  font-size: 30px;
  margin-left: -50px;
`;

export const Image = styled.img`
  float: left;
  height: 150px;
  margin-left: 50px;
  border: 3px solid black;
  border-radius: 10px;
  background-size: cover;
`;

export const CloseModalButton = styled(ImCross)`
  cursor: pointer;
  position: absolute;
  right: 8px;
`