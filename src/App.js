import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard
        fname={"Jane"}
        lname={"Doe"}
        age={45}
        hair={"Black"} />
      <PersonCard
        fname={"John"}
        lname={"Smith"}
        age={88}
        hair={"Brown"} />
      <PersonCard
        fname={"Millard"}
        lname={"Fillmore"}
        age={50}
        hair={"Brown"} />
      <PersonCard
        fname={"Maria"}
        lname={"Smith"}
        age={62}
        hair={"Brown"} />
    </div>
  );
}

export default App;
