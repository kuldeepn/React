import Button from "../Button/Button";

const ErrorModal = (props) => {
  return (
    <div className="popup" onClick={props.onConfirm}>
      <div className="card py-6 px-10">
        <header>
          <h2 className="text-white font-bold text-2xl bg-purple-700">
            {props.title}
          </h2>
        </header>
        <div>
          <p className="text-white">{props.message}</p>
        </div>
        <footer>
          <Button onClick={props.onConfirm}> Okay </Button>
        </footer>
      </div>
    </div>
  );
};

export default ErrorModal;
