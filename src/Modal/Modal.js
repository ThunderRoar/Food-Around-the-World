import React, { useState, useEffect } from "react";
import { callFood, callRecipe } from "../services/APICall";
import { useSpring, animated } from 'react-spring';

//Styled Components
import {
  ModalContainer,
  TopText,
  DishDiv,
  TitleDiv,
  Title,
  Image,
  CloseModalButton,
} from "./Modal.elements";

export const Modal = ({ showModal, setShowModal, chosenCountry }) => {

  // const animation = useSpring({
  //   duration: 250,
  //   opacity: showModal ? 1 : 1,
  //   transform: showModal ? translateY(0%) : translateY(0%)
  // });

  const [dishes, setDishes] = useState();

  // Here we are making an async call as soon as the component renders
  useEffect(() => {
    const asyncCall = async () => {
      const res = await callFood(chosenCountry, true, "", "");
      setDishes(res);
    };
    asyncCall();
  }, []);

  console.log(dishes);

  return (
    <>
      {showModal ? (
          <ModalContainer>
            <CloseModalButton
              style={{ width: "40px" }}
              onClick={() => setShowModal((prev) => !prev)}
            ></CloseModalButton>
            <TopText>Select a Dish</TopText>
            {dishes["results"].map((dish) => {
              return (
                <DishDiv>
                  <TitleDiv>
                    <Title>{dish["title"]}</Title>
                  </TitleDiv>
                  <Image src={dish["image"]}></Image>
                </DishDiv>
              );
            })}
          </ModalContainer>
      ) : null}
    </>
  );
};

export default Modal;
