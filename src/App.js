//import Home from "./pages/home/Home.jsx";
import "./App.css";
// import Auth from "./pages/Auth/Auth";
//import ProfileLeft from "./components/ProfileLeft/ProfileLeft";
import Profile from "./pages/profile/Profile.jsx";

function App() {
  return (
    <div className="App">
      <div className="blur" style={{ top: "-18%", right: "0" }}></div>
      <div className="blur" style={{ top: "36%", left: "-8rem" }}></div>
      {/* <Home /> */}

      <Profile />
      <div>`${API_URL}/register`</div>
      {/* <Auth /> */}
    </div>
  );
}

export default App;
