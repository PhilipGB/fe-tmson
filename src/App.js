import { Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import CreateJob from './components/CreateJob';
import ForgetPassword from './components/ForgetPassword';
import GlobalStyle from './components/GlobalStyle';
import Home from './components/Home';
import JobBookingProcess from './components/JobBookingProcess';
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
import JobOwnerApprovalProcess from './components/JobOwnerApprovalProcess';
import { getTokensByUser } from '../src/Utils/api-tokens-new';

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

  const [tokens, setTokens] = useState([]);

  useEffect(() => {
    getTokensByUser(7).then((tokensFromApi) => {
      setTokens(tokensFromApi);
    });
  }, []);

  return (
    <div className='App'>
      <UserContext.Provider value={{ user, setUser }}>
        <AuthProvider>
          <Nav />
          <Routes location={location} key={location.pathname}>
            <Route element={<PrivateRoutes />}>
              <Route path='/home' element={<Home />} />
              <Route path='/map' element={<Map />} />
              <Route path='/create' element={<CreateJob />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/profile/:username' element={<UpdateProfile />} />
              <Route path='/tasks' element={<TaskList />} />
              <Route path='/tasks/:task_id' element={<JobBookingProcess />} />
              <Route path='/search-results' element={<SearchResults />} />
              <Route
                path='/tasks/my-account/:user_id'
                element={<JobOwnerApprovalProcess />}
              />
              <Route
                path='/profile/:user_id/my-tokens'
                element={<MyTokens tokens={tokens} />}
              />
              <Route
                path='/profile/:user_id/my-tasks'
                element={<MyTasks tokens={tokens} />}
              />
            </Route>
            <Route path='/' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/forget-password' element={<ForgetPassword />} />
          </Routes>
          <GlobalStyle />
        </AuthProvider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
