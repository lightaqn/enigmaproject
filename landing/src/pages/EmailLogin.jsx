// import styled from "styled-components";
// import { emaillogin } from "../redux/apiMethods";
// import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import Spinner from "../components/Spinner";

// const EmailLoginContainer = styled.div`
//   width: 60%;
//   height: 500px;
//   -webkit-box-shadow: 0px 5px 33px rgba(75, 5, 75, 0.19);
//   -moz-box-shadow: 0px 5px 33pxrgba (75, 5, 75, 0.19);
//   box-shadow: 0px 5px 33px rgba(75, 5, 75, 0.19);
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border-radius: 15px;
//   margin-left: 75px;
//   margin-top: 0px;
//   position: relative;
//   &:hover {
//     background: rgba(255, 255, 255, 0.05);
//     border-radius: 16px;
//     backdrop-filter: blur(5px);
//     -webkit-backdrop-filter: blur(5px);
//     border: 1px solid rgba(255, 255, 255, 0.3);
//   }
// `;
// const EmailLoginWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const Input = styled.input`
//   background-color: #f3c1eb;
//   border-radius: 5px;
//   margin-top: 5px;
//   height: 50px;
//   align-items: center;
//   justify-content: center;
//   padding: 10px 15px;
//   width: 250px;
//   margin-bottom: 15px;
// `;
// const P = styled.p`
//   font-size: 15px;
//   color: #fff;
//   font-weight: normal;
//   margin-top: 17px;
// `;
// const Button = styled.button`
//   margin-top: 5px;
//   background-color: #5e035ec8;
//   color: #f3d9e8;
//   height: 50px;
//   padding: 5px;
//   width: 100px;
//   border-radius: 10px;
//   font-size: 14px;
//   font-weight: bold;
//   border: 1px solid rgba(255, 255, 255, 0.521);
//   cursor: pointer;
//   &:hover {
//     transform: scale(1.2);
//     transition: all 0.3s ease;
//   }
//   &:disabled {
//     color: teal;
//     cursor: not-allowed;
//   }
// `;
// const Error = styled.span`
//   color: #e63737;
//   font-size: 11px;
// `;
// const EmailLogin = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const dispatch = useDispatch();

//   const { isFetching, error } = useSelector((state) => state.user.currentUser);

//   // useEffect(() => {
//   //   const handleLogin = () => {
//   //     fetch("http://localhost:5000/auth/emaillogin", {
//   //       method: "POST",
//   //       credentials: "include",
//   //       headers: {
//   //         Accept: "application/json",
//   //         "Content-Type": "application/json",
//   //         "Access-Control-Allow-Credentials": true,
//   //       },
//   //     })
//   //       .then((response) => {
//   //         if (response.status === 200) return response.json();
//   //         throw new Error("authentication failure!");
//   //       })
//   //       .then((resObject) => {
//   //         setUser(resObject.user);
//   //       })
//   //       .catch((err) => {
//   //         console.log(err);
//   //       });
//   //   };
//   //   handleLogin();
//   // }, [user]);

//   // useEffect(() => {
//   //   if (emaillogin) {
//   //     emaillogin({ displayName: username || password  });
//   //   }
//   // }, [username, password]);

//   // useEffect(() => {
//   //   if (!username || !password) {
//   //     res.status(500).json('Invalid Credentials!');
//   //   } else {
//   //     emaillogin(dispatch, { username, password });
//   //   }
//   // }, [username, password]);

//   const handleLogin = (e) => {
//     e.preventDefault();
//     emaillogin(dispatch, { username, password });
//   };

//   // useEffect(() => {
//   //   handleLogin(user);
//   // }, []);
//   //
//   return (
//     <EmailLoginContainer>
//       <EmailLoginWrapper>
//         <Input
//           placeholder="username"
//           type="username"
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <Input
//           placeholder="password"
//           type="password"
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <Button onClick={() => handleLogin} disabled={isFetching}>
//           Submit
//         </Button>

//         {error && <Error> Login failed ... </Error>}

//         <P>
//           Forgot your password? click{" "}
//           <Link
//             to="/forgotpassword"
//             style={{ fontWeight: "bold", color: "purple" }}
//           >
//             here
//           </Link>{" "}
//         </P>
//         <P>
//           <Link to="/register" style={{ fontWeight: "bold", color: "purple" }}>
//             Create account
//           </Link>
//         </P>
//         <Spinner />
//       </EmailLoginWrapper>
//     </EmailLoginContainer>
//   );
// };

// export default EmailLogin;
