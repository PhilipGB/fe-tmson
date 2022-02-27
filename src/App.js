import { Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import CreateJob from './components/CreateJob';
import GlobalStyle from './components/GlobalStyle';
import Home from './components/Home';
import Login from './components/Login';
import Nav from './components/Nav';
import Register from './components/Register';
import { getSkills } from '../src/Utils/api';

function App() {
  const location = useLocation();
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    getSkills().then((skillsFromApi) => {
      setCategoryList(skillsFromApi);
    });
  }, []);

  return (
    <div className="App">
      <Nav />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create" element={<CreateJob categoryList={categoryList} />} />
      </Routes>
      <GlobalStyle />
    </div>
  );
}

export default App;
