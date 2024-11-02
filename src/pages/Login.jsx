import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth, db } from "../config/firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  const toggleForm = () => setIsLogin(!isLogin);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("User logged in successfully!", { position: "top-center" });
      navigate("/"); // Redirect to home page after successful login
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error(error.message); // Log the error for debugging
      toast.error("Incorrect email or password.", { position: "bottom-center" }); // User-friendly error message
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: fname,
          lastName: lname,
          photo: "", // Add a default photo or handle it accordingly
        });
      }
      toast.success("User registered successfully!", { position: "top-center" });
      setIsLogin(true);
      setEmail("");
      setPassword("");
      setFname("");
      setLname("");
    } catch (error) {
      console.error(error.message); // Log the error for debugging
      toast.error(error.message, { position: "bottom-center" }); // Show error message to user
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "#ffffff" }}>
      <div style={{
        width: "400px",
        padding: "30px",
        border: "3px solid #D71345",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
      }}>
        <h3 style={{ fontSize: "1.5em", color: "#333", marginBottom: "5px" }}>
          {isLogin ? "Login" : "Sign Up"}
        </h3>
        <p style={{ fontSize: "0.9em", color: "#666", marginBottom: "20px" }}>
          {isLogin ? "Please Login to Book Appointment" : "Register to Book Appointment"}
        </p>
        <form onSubmit={isLogin ? handleLogin : handleRegister}>
          {!isLogin && (
            <>
              <div style={{ marginBottom: "15px", textAlign: "left" }}>
                <label style={{ display: "block", fontSize: "0.85em", color: "#555" }}>First Name</label>
                <input
                  type="text"
                  placeholder="First name"
                  style={{ width: "100%", padding: "10px", marginTop: "5px", borderRadius: "4px", border: "1px solid #ccc" }}
                  onChange={(e) => setFname(e.target.value)}
                  required
                />
              </div>
              <div style={{ marginBottom: "15px", textAlign: "left" }}>
                <label style={{ display: "block", fontSize: "0.85em", color: "#555" }}>Last Name</label>
                <input
                  type="text"
                  placeholder="Last name"
                  style={{ width: "100%", padding: "10px", marginTop: "5px", borderRadius: "4px", border: "1px solid #ccc" }}
                  onChange={(e) => setLname(e.target.value)}
                  required
                />
              </div>
            </>
          )}
          <div style={{ marginBottom: "15px", textAlign: "left" }}>
            <label style={{ display: "block", fontSize: "0.85em", color: "#555" }}>Email</label>
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              style={{ width: "100%", padding: "10px", marginTop: "5px", borderRadius: "4px", border: "1px solid #ccc" }}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div style={{ marginBottom: "20px", textAlign: "left" }}>
            <label style={{ display: "block", fontSize: "0.85em", color: "#555" }}>Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              style={{ width: "100%", padding: "10px", marginTop: "5px", borderRadius: "4px", border: "1px solid #ccc" }}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "#D71345",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            fontSize: "1em",
            cursor: "pointer",
            fontWeight: "bold",
            marginBottom: "15px",
          }}>
            {isLogin ? "Login" : "Sign Up"}
          </button>
          <p style={{ fontSize: "0.85em", color: "#D71345" }}>
            {isLogin ? "Create a new Account?" : "Already registered?"}
            <button
              type="button"
              onClick={toggleForm}
              style={{
                background: "none",
                border: "none",
                color: "#D71345",
                cursor: "pointer",
                fontWeight: "bold",
                padding: 0,
                marginLeft: "5px",
              }}
            >
              {isLogin ? "Click Here" : "Login Here"}
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
