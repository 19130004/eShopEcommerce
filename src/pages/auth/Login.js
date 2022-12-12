import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import Loader from "../../components/loader/Loader";
import {
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";
import Card from "../../components/card/Card";
import styles from "./auth.module.scss";
import loginImg from "../../assets/login.png";
import { auth } from "../../firebase/config";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const loginUser = (e) => {
    e.preventDefault();
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        // const user = userCredential.user;
        // ...
        setIsLoading(false);
        toast.success("Login Successful...");
        navigate("/");
      })
      .catch((error) => {
        setIsLoading(false);
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };
  const provider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        toast.success("Login Successful...");
        navigate("/");
      })
      .catch((error) => {
        // Handle Errors here.
        toast.error(error.message);
        // ...
      });
  };
  return (
    <React.Fragment>
      {isLoading && <Loader />}
      <section className={` container ${styles.auth}`}>
        <div className={styles.img}>
          <img src={loginImg} alt="Login" width="400" />
        </div>
        <Card>
          <div className={styles.form}>
            <h2>Login</h2>
            <form onSubmit={loginUser}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <input
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <button type="submit" className="--btn --btn-primary --btn-block">
                Login
              </button>
              <div className={styles.links}>
                <Link to="/reset">Forgot Password?</Link>
              </div>
              <p>-- or --</p>
            </form>
            <button
              type="submit"
              className="--btn --btn-block"
              onClick={signInWithGoogle}
            >
              <FcGoogle />
              Login with Google
            </button>
            <span className={styles.register}>
              <p>
                Don't have an account?{" "}
                <Link to="/register">
                  <b>Register</b>
                </Link>
              </p>
            </span>
          </div>
        </Card>
      </section>
    </React.Fragment>
  );
};

export default Login;
