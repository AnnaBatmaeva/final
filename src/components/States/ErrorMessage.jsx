import './states.scss'

const ErrorMessage = ({ errorText }) => {
  return (
    <h1>Error: {errorText}</h1>
  );
};

export default ErrorMessage;