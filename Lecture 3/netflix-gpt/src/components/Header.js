import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/Redux/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        dispatch(removeUser());
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className=" z-10 absolute flex justify-between px-24 py-8 bg-gradient-to-b from-black w-full">
      <img
        className="w-40"
        src="https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
        alt="logo"
      />

      {user && (
        <button
          onClick={handleSignOut}
          className="bg-red-600 text-white px-3 py-2 border-none outline-none rounded-xl"
        >
          Sign Out
        </button>
      )}
    </div>
  );
};

export default Header;
