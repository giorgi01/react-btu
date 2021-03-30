import Welcome from "../../components/welcome";
import Greeting from '../../components/greeting';
// import "./home-page.css";

function HomePage(props) {
  return (
    <div className="row">
      <Welcome message="Hello ReactJS" color="black" />
      <Welcome message="Hello ReactJS" color="gray" />
      <Welcome message="Hello ReactJS" color="red" />
      Below will be error text, because we do not support white color
      <Welcome message="Hello ReactJS" color="white" />
      <Greeting text="Greeting text" description="mini description" />
    </div>
  );
}

export default HomePage;