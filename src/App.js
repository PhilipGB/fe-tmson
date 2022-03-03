import { Routes, Route, useLocation } from 'react-router-dom';

import { useState, useEffect } from 'react';
import './App.css';
import CreateJob from './components/CreateJob';
import ForgetPassword from './components/ForgetPassword';
import GlobalStyle from './components/GlobalStyle';
import Home from './components/Home';
import Login from './components/Login';
import Nav from './components/Nav';
import TaskList from './components/TaskList';
import SearchResults from './components/SearchResultsPage';
import PrivateRoutes from './components/PrivateRoutes';
import Register from './components/Register';
import MyTasks from './components/MyTasks';
import MyTokens from './components/MyTokens';
import { AuthProvider } from './Contexts/AuthContext';
import { UserContext } from './Contexts/UserContext';
import Profile from './components/Profile';
import UpdateProfile from './components/UpdateProfile';
import Map from './components/Map';
import { getSkills } from '../src/Utils/api-createJob';
import { getTokensByUser } from '../src/Utils/api-tokens';

function App() {
  const [user, setUser] = useState({
    user_id: null,
    username: '',
    first_name: '',
    last_name: '',
    birth_date: '',
    avatar_url: '',
    address: '',
    postcode: '',
    email_address: '',
    bio: '',
  });
  const location = useLocation();
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    getSkills().then((skillsFromApi) => {
      setCategoryList(skillsFromApi);
    });
  }, []);

  const [tokens, setTokens] = useState([]);

  useEffect(() => {
    getTokensByUser(user.user_id).then((tokensFromApi) => {
      setTokens(tokensFromApi);
    });
  });

  return (
    <div className="App">
      <UserContext.Provider value={{ user, setUser }}>
        <AuthProvider>
          <Nav />
          <Routes location={location} key={location.pathname}>
            <Route element={<PrivateRoutes />}>
              <Route path="/home" element={<Home />} />
              <Route path="/map" element={<Map />} />
              <Route path="/create" element={<CreateJob categoryList={categoryList} />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/profile/:username" element={<UpdateProfile />} />
              <Route path="/profile/:username/my-tokens" element={<MyTokens tokens={tokens} />} />
              <Route path="/profile/:username/my-tokens" element={<MyTasks tokens={tokens} />} />
              <Route path="/tasks" element={<TaskList />} />
              <Route path="/search-results" element={<SearchResults />} />
            </Route>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forget-password" element={<ForgetPassword />} />
          </Routes>
          <GlobalStyle />
        </AuthProvider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
