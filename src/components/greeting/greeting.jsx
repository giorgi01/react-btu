const Greeting = ({text, description}) => {
    return (
        <div className="row greeting-container">
          <h1 className="text-success">{text}</h1>
          <h2 className="text-muted">{description}</h2>
        </div>
      );
};

export default Greeting;