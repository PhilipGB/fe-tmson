import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import CreateJob from './components/CreateJob';
import GlobalStyle from './components/GlobalStyle';
import Home from './components/Home';
import Login from './components/Login';
import Nav from './components/Nav';
import Register from './components/Register';
import TaskList from './components/TaskList';
import SearchResults from './components/SearchResultsPage';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Nav />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create" element={<CreateJob />} />
        <Route path="/tasks" element={<TaskList />} />
        <Route path="/search-results" element={<SearchResults />} />
      </Routes>
      <GlobalStyle />
    </div>
  );
}

export default App;
