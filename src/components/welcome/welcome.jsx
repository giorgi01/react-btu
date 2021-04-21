import './welcome.css';

function Welcome({ color, message }) {
  const colors = ['red', 'black', 'gray'];

  const renderError = () => {
    return (
      <div className="alert alert-danger">
        <p>ERROR_MESSAGE</p>
      </div>
    );
  };

  const renderSuccess = () => {
    return (
      <div className="row">
        <h1 className={['fs-1', `text-${color}`].join(' ')}>{message}</h1>
      </div>
    );
  };

  return <>{!colors.includes(color) ? renderError() : renderSuccess()}</>;
}

export default Welcome;
