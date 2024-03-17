import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppTemplate from './components/AppTemplate';
import About from './screens/About'
import Certificates from './screens/Certificates';
import Projects from './screens/Projects';
import More from './screens/More';
import Contact from './screens/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<AppTemplate/>}>
          <Route path='' element = {<About/>}/>
          <Route path='certificates' element = {<Certificates/>} />
          <Route path='projects' element = {<Projects/>} />
          <Route path = "more" element = {<More/>} />
          <Route path='contact' element = {<Contact/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
