import ErrorSVG from "../shared/Error";

const ErrorContainer = () => {
  return (
    <div className="error-container">
      <ErrorSVG />
      <p className="ne"> Network Error</p>

      <button className="try-again">Try again</button>
    </div>
  );
};

export default ErrorContainer;
