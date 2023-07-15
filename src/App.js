import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";
import Episodes from "./components/Episodes";
import ForYou from "./components/ForYou";
import Navbar from "./components/Navbar";
import Playlists from "./components/Playlists";
import New from "./components/New";
import Login from "./components/Login";
import { useState, useEffect } from "react";
import ListenAuthor from "./components/ListenAuthor";




function App() {
 
  const [token, setToken] = useState("");
  useEffect(() => {
    const hash = window.location.hash
    let token = window.localStorage.getItem("token")
    if (!token && hash) {
        token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
        window.location.hash = ""
        window.localStorage.setItem("token", token)
    }
    setToken(token)
}, [])
  const name = "Julia"; 

  
  return (
    <>
      {token && <div className="App">
        <Navbar name={name} />
      </div>}
      <Router>
        <Routes>
          <Route exact path="/" element={<ForYou/>}></Route>
          <Route exact path="/new" element={<New token={token} />}></Route>
          <Route exact path="/playlists" element={<Playlists />}></Route>
          <Route exact path="/episodes" element={<Episodes />}></Route>
          <Route exact path="/login"  element={<Login />} ></Route>
        </Routes>
      </Router>
      {token && <div className="listenAuthor">
          <ListenAuthor token={token} />
      </div>}
    </>
  );
}

export default App;
