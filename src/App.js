import Sidebar from "./components/sidebar/Sidebar";
import TopBar from "./components/topbar/TopBar";
import "./app.css"
import Home from "./components/pages/home/Home";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import UserList from "./components/pages/userList/UserList";
import User from "./components/user/User";
import NewUser from "./components/newPage/NewUser";


function App() {
  return (
    <BrowserRouter>
      <TopBar/>
        <div className="container">
          <Sidebar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="users/" element={<UserList />} />
            <Route path="users/:userid" element={<User />} />
            <Route path="/newUser" element={<NewUser />} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
