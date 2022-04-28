import './App.css';
import Footer from './Components/Footer';
import Nav from './Components/Nav';
import Homepage from './Components/Homepage';
import About from './Components/About';
import ProjectMain from './Components/Project-Pages/ProjectMain';

function App() {
  return (
    <div className="App">
      {/* <Nav /> */}
      <ProjectMain />
      <Footer />
      
    </div>
  );
}

export default App;
