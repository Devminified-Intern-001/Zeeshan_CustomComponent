import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import '../App.css'
interface Iprops {
  children: ReactNode;
  className?: string;
  title?: string;
  description?: string;
  open?: boolean;
  onclose?: ReactNode;
}
const customStyles = {
  content: {
    maxWidth:'500px',
    maxHeight:'500px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1,
    overflowY:'scroll'
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#portal');

function NewApp(props: Iprops) {
  const { className, open, title, description, onclose,children, ...rest } = props;
  let subtitle;
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  } 
  return (
    <div className='ReactModal__Overlay'>
      <Modal
        isOpen={open}
        onAfterOpen={afterOpenModal}
        onRequestClose={onclose}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {title}
        <br />
        {description}
        {children}
        <button onClick={onclose}>close</button>
      </Modal>
    </div>
  );
}

export default NewApp;
