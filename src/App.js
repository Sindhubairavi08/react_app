// import logo from './logo.svg';
import './App.css';
import NavBar from './components/functionalcomponents/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/functionalcomponents/Home';
import About from './components/functionalcomponents/About';
import Login from './components/functionalcomponents/Login';
//import PropsComponent from './components/functionalcomponents/PropsComponent';
//import StateComponent from './components/classcomponents/StateComponent';
function App() {
  
  
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/Home" element={<Home/>}></Route>
        <Route path="/About" element={<About/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
      </Routes>
      </BrowserRouter>
    {/* {/* <PropsComponent name="Sindhu" role="front-end developer"/> */}
      <header className="App-header"> 
      {/* <StateComponent></StateComponent> */}
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      <footer className="footer">
        <div>
        <p>&copy; 2024 Sindhubairavi. All rights reserved.</p>
        </div>
        <div>
        <h3>Follow Us</h3>
                <ol>
                    <li> <a href="https://www.linkedin.com/in/sindhu-bairavi-12896a235?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">LinkedIn </a></li>
                    <li> <a href="https://www.instagram.com/sindhu_bairavi_03/">Instagram </a></li>
                    <li> <a href="https://github.com/Sindhubairavi08">GitHub</a></li>
                </ol>
    
        </div>
        </footer>
    </div>
  );
}

export default App;
