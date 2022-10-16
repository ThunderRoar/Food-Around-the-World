import React, {useState} from "react";

//Styled Components
import {
  ModalContainer
} from "./Explore.elements";

import { GiKnifeFork } from "react-icons/gi";
// import { Modal } from "./Modal/Modal";

const Explore = () => {
  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    setShowModal(prev => !prev)
  }

  
  return (
    <>
    <h1>Hello World</h1>
      <button onClick={openModal}>Toggle Me</button>
      {/* <Modal showModal={showModal} setShowModal={setShowModal}></Modal> */}
    </>
  );
};

export default Explore;
