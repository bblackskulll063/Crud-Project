import Navbar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserState from "./context/user/UserState";

function App() {
  return (
    <UserState>
      
    <Router>
      <Routes>
        <Route exact path="/" element={<Navbar/>}/>
      </Routes>
    </Router>
    </UserState>
  );
}

export default App;
