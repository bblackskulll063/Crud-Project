import Navbar from "./components/navbar";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserState from "./context/user/UserState";

function App() {
  return (
    <UserState>
    <div className="App">
      <Navbar/>
    </div>
    </UserState>
  );
}

export default App;
