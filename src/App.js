import { Routes, Route, useLocation, useParams } from "react-router-dom";
import "./App.css";
import CreateJob from "./components/CreateJob";
import GlobalStyle from "./components/GlobalStyle";
import Home from "./components/Home";
import JobBookingProcess from "./components/JobBookingProcess";
import Login from "./components/Login";
import Nav from "./components/Nav";
import Register from "./components/Register";

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
        <Route path="/tasks/:task_id" element={<JobBookingProcess />} />
      </Routes>
      <GlobalStyle />
    </div>
  );
}

export default App;
