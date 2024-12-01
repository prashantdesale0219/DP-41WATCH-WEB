import React, { useState } from 'react';
import { signInWithEmailAndPassword, deleteUser, reauthenticateWithCredential, EmailAuthProvider } from "firebase/auth";
import { auth } from '../firebase';
import { toast, ToastContainer } from 'react-toastify';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        toast.success("Welcome to your account!", {
          position: "top-center",
          autoClose: 4000,
        });
      })
      .catch((err) => {
        console.log(err);
        toast.error("Incorrect email or password!", {
          position: "top-center",
          autoClose: 4000,
        });
      });
  };

  const handleDeleteAccount = () => {
    const user = auth.currentUser;
  
    if (user) {
      if (email === user.email) {  // Ensure the email matches the currently signed-in user's email
        const credential = EmailAuthProvider.credential(email, password);
  
        reauthenticateWithCredential(user, credential)
          .then(() => {
            return deleteUser(user);
          })
          .then(() => {
            toast.info("ACCOUNT DELETED SUCCSESFULLY...!🫡", {
              position: "top-center",
              autoClose: 4000,
            });
          })
          .catch((error) => {
            console.error("Error during account deletion:", error);
            toast.error("Failed to delete user account. Please try again.", {
              position: "top-center",
              autoClose: 4000,
            });
          });
      } else {
        toast.error("The email provided does not match the current user.", {
          position: "top-center",
          autoClose: 4000,
        });
      }
    } else {
      toast.warn("No user is currently signed in.", {
        position: "top-center",
        autoClose: 4000,
      });
    }
  };
  

  return (
    <div>
      <div style={{ border: "1px solid gray", height: "400px", width: "100%", paddingTop: "6%", textAlign: "center", position: "relative" }}>
        <form onSubmit={handleLogin}>
          <h5>ALREADY REGISTERED?</h5><br />
          <input
            type="text"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ border: "none", width: "100%" }}
            // className='f-input'
          /> <br /><br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ border: "none", width: "100%" }}
          /> <br /><br />
          <span style={{ textAlign: "left" }}>
            <a href="/">Forgot your password?</a>
          </span><br /><br />
          <input type="submit" style={{ height: "50px", width: "120px", marginLeft: "-30%" }} className='btn btn-outline-secondary' />
        </form>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button
          onClick={handleDeleteAccount}
          className='btn btn-outline-danger'
          style={{ height: "50px", width: "120px", position: "relative", left: "16%", top: "-18.50%" }}
        >
          LOGOUT
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
