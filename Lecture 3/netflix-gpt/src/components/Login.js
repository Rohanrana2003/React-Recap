import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateForm } from "../utils/validateForm";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/Redux/userSlice";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const name = useRef();
  const email = useRef();
  const password = useRef();

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  const handleClick = () => {
    const message = validateForm(email.current.value, password.current.value);
    setError(message);
    if (message) return;

    //Sign In SignUp logic
    if (!isSignIn) {
      // Signup logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );

              navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              setError(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + "-" + errorMessage);
        });
    } else {
      // Sign In logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div className="relative">
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fa4630b1-ca1e-4788-94a9-eccef9f7af86/web/IN-en-20250407-TRIFECTA-perspective_43f6a235-9f3d-47ef-87e0-46185ab6a7e0_large.jpg"
          alt="bg-image"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute bg-black bg-opacity-70 mt-44 left-0 right-0 mx-auto w-3/12 flex flex-col py-16 px-10 rounded-lg"
      >
        <h1 className="text-3xl font-semibold text-white mb-5">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Name"
            ref={name}
            className="px-4 py-3 m-2 bg-zinc-700 focus:border-white border-transparent border text-white ring-0 outline-none rounded-md"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="px-4 py-3 m-2 bg-zinc-700 focus:border-white border-transparent border text-white ring-0 outline-none rounded-md"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="px-4 py-3 m-2 bg-zinc-700 focus:border-white border-transparent border text-white ring-0 outline-none rounded-md"
        />
        {error && <p className="text-red-700">{error}</p>}
        <button
          onClick={handleClick}
          className="py-3 m-4 bg-red-800 hover:bg-red-900 transition-colors duration-300 text-white rounded-md font-semibold text-[18px]"
        >
          Sign In
        </button>
        {isSignIn ? (
          <p className="text-gray-200">
            New to netflix?{" "}
            <span
              className="text-white cursor-pointer hover:underline"
              onClick={toggleForm}
            >
              SignUp now
            </span>
          </p>
        ) : (
          <p className="text-gray-200">
            Already a customer?{" "}
            <span
              className="text-white cursor-pointer hover:underline"
              onClick={toggleForm}
            >
              SignIn
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
