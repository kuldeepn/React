import { Fragment } from "react";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className="backdrop"></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className="modal">
      <div className="content">{props.children}</div>
    </div>
  );
};

const PortalElement = document.getElementById("overlay");
 
const Modal = (props) => {
 return(
  <Fragment>
    {ReactDOM.createPortal(<Backdrop />, PortalElement)}
    {ReactDOM.createPortal(
      <ModalOverlay>{props.children}</ModalOverlay>,
      PortalElement
    )}
    </Fragment>
 );
};
export default Modal;
