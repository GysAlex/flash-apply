import { createContext, useState, useContext } from 'react';
import { waitAndResolve } from '../utils/waitAndResolve';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [modalState, setModalState] = useState({
    isOpen: false,
    content: null,
    props: {},
  })

  const openModal = (content, props = {}) => {
    setModalState({ isOpen: true, content, props });
  }

  const closeModal = async  () => {
    setModalState({...modalState, isOpen: false})

    await waitAndResolve(800)

    setModalState((prev) => {

        prev.content = null
        prev.props = {}
        prev.isOpen= false

        console.log("Bonjour boss")

    })


  }

  return (
    <ModalContext.Provider value={{ modalState, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  )
};

export const useModal = () => useContext(ModalContext);