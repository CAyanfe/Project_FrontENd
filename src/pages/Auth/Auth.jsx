import React from "react";
import "./Auth.css";
import Logo from "../../images/logo.png";
const Auth = () => {
  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1>GoMyCode Media</h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>
      {/* <SignUp /> */}
      <LogIn />
    </div>
  );
};

function LogIn() {
  return (
    <div className="a-right">
      <form className="infoForm authForm">
        <h3>Log In</h3>

        <div>
          <input
            type="text"
            placeholder="Username"
            className="infoInput"
            name="username"
          />
        </div>

        <div>
          <input
            type="password"
            className="infoInput"
            placeholder="Password"
            name="password"
          />
        </div>

        <div>
          <span style={{ fontSize: "12px" }}>
            Don't have an account Sign up
          </span>
          <button className="button infoButton">Login</button>
        </div>
      </form>
    </div>
  );
}
// function SignUp() {
//   return (
//     <div className="a-right">
//       <form action="" className="infoForm authForm">
//         <h3>Sign Up</h3>
//         <div>
//           <input
//             type="text"
//             placeholder="First Name"
//             className="infoInput"
//             name="firstname"
//           />
//           <input
//             type="text"
//             placeholder="Lasr Name"
//             className="infoInput"
//             name="lastname"
//           />
//         </div>
//         <div>
//           <input
//             type="  "
//             className="infoInput"
//             name="username"
//             placeholder="Username"
//           />
//         </div>
//         <div>
//           <input
//             type="  "
//             className="infoInput"
//             name="password"
//             placeholder="Password"
//           />
//           <input
//             type="  "
//             className="infoInput"
//             name="confirmpassd"
//             placeholder="Confirm Password"
//           />
//         </div>
//         <div>
//           <span style={{ fontSize: "12px" }}>
//             Already have an account. Login!
//           </span>
//         </div>
//         <button className="button infoButton" type="submit">
//           Signup
//         </button>
//       </form>
//     </div>
//   );
// }
export default Auth;
