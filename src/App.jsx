import { useEffect } from "react";
import { useSelector } from "react-redux";
import NavbarC from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";

function App() {
  const { userId } = useSelector(store => store.auth);

  useEffect(() => {
    
  }, [userId]);

  return (
    <div>
      { }
      <NavbarC />
      <Home />
      <Login />
      <SignUp />
      <Profile />
    </div>
  );
}

export default App;
