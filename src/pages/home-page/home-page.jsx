import Counter from '../../components/counter'
import Theme from '../../components/theme'

function HomePage(props) {
  return (
    <div className="d-flex p-2 bd-highlight">
      <Counter />
    </div>
  );
}

export default HomePage;