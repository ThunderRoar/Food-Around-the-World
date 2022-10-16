import React, { useState, useEffect } from "react";
import { UNSAFE_DataRouterStateContext } from "react-router-dom/dist";
import { callFood, callRecipe } from "../services/APICall";

// Styled Components
import { 
    TitleDiv,
    Title,
    Description,
    Image,
    ImageDiv,
    Instructions,
 } from "./Recipe.elements"

const Recipe = () => {
    // Hard coded recipe id
    var temp=642595; 

    const [info, setInfo] = useState({title: "a", summary: "b", image: "a"});

    // Here we are making an async call as soon as the component renders
    useEffect(() => {
      const asyncCall = async () => {
        const res = await callRecipe(temp);
        setInfo(res);
      };
      asyncCall();
    }, []);
  
    console.log(info);
    
    var div = document.createElement("div");
    var divOne = document.createElement("divOne");
    div.innerHTML = info["summary"];
    divOne.innerHTML = info["instructions"];

    return (
        <>
        <TitleDiv>
            <Title>{info["title"]}</Title>
            <Description id = "wrapper"></Description>
            {div.textContent || div.innerText || ""}
        </TitleDiv>
        <ImageDiv>
            <center><Image src={info["image"]}></Image></center>
        </ImageDiv>
        <TitleDiv>
            <Instructions>{divOne.textContent || divOne.innerText || ""}</Instructions>
        </TitleDiv>
        </>
    )
}

export default Recipe;