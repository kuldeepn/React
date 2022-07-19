import { Fragment } from "react";

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

const PortalElement = document.getElementById("overlays");

const Modal = (props) => {
    <Fragment>
        <Backdrop />
        <ModalOverlay>{props.children}</ModalOverlay>
    </Fragment>
};
export default Modal;



