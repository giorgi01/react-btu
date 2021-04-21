const Greeting = ({ text, description }) => {
  return (
    <div>
      <h1 className="text-success">{text}</h1>
      <h2 className="text-muted">{description}</h2>
    </div>
  );
};

export default Greeting;
