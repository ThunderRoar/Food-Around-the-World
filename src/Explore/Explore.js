import React from "react";

//Styled Components


import { Modal } from "../Modal/Modal";

const Explore = () => {
  const [showModal, setShowModal] = useState(false)
  const [chosenCountry] = useState("Italian")
  const openModal = () => {
    setShowModal(prev => !prev)
  }

  
  return (
    <>
    <h1>Hello World</h1>
      <button onClick={openModal}>Toggle Me</button>
      <Modal showModal={showModal} setShowModal={setShowModal} chosenCountry={chosenCountry}></Modal>
    </>
  );
};

export default Explore;
