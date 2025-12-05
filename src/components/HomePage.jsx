import amongus from '../assets/amongus.png';
import NavBar from './NavBar';

function HomePage() {
  return (
    <>
      <NavBar />
      <div className="main-content" style={{ marginLeft: '300px' }}>
        <h1>Welcome to the Crewmate Creator!</h1>
        <p>Here is where you can create your very own set of crewmates before sending them off into space!</p>
        <img src={amongus} alt="among us characters" />
      </div>
    </>
  );
}

export default HomePage;