import ScrollUpButton from './components/ScrollUpButton.js';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Services from './components/Services.js';
import Skills from './components/Skills.js';
import TeamMembers from './components/TeamMembers.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';
import './App.css';



function App() {
  return (
    <>
      <ScrollUpButton></ScrollUpButton>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Services></Services>
      <Skills></Skills>
      <TeamMembers></TeamMembers>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;
