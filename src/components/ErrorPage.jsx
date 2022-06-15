import { Link } from "react-router-dom";

const ErrorPage = ({ status, msg }) => {
  return (
    <main>
      {msg ? (
        <h2>{`${status}: ${msg} `}</h2>
      ) : (
        <h2>Error: Sorryt his link is no longer active!</h2>
      )}
    </main>
  );
};

export default ErrorPage;
