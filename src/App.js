import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import CreateJob from "./components/CreateJob";
import GlobalStyle from "./components/GlobalStyle";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create" element={<CreateJob />} />
      </Routes>
      <GlobalStyle />
    </div>
  );
}

export default App;
