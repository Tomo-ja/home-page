import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import AboutMe from './components/AboutMe';
import Expertise from './components/Expertise';
import Contact from './components/Contact';

import './App.scss';


function App() {
  return (
    <div className="App">
        <Navbar />
        <Welcome />
        <AboutMe />
        <Expertise />
        <Contact />
    </div>
  );
}

export default App;
