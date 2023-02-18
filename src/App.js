import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <Tech />
    </div>
  );
};

const Tech = () => {
  return (
    <ul className="ul-style">
      <li>Learn js</li>
    </ul>
  );
};

const Header = () => {
  return (
    <div>
      <h1>Hello react</h1>
      <a href="#">react link</a>
      <a href="#">react link</a>
      <a href="#">react link</a>
    </div>
  );
};

export default App;
