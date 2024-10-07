import NavBar from './Component/NavBar';
import Banner from './Component/Banner';
import Skills from './Component/Skills';
import Projects from './Component/Projects';
import Form from './Component/Form';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Skills/>
      <Projects /> 
      <Form/> 
    </div>
  );
}

export default App;
