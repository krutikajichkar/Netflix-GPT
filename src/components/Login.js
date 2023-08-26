import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validation";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [Errors, setErrors] = useState();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const formHandler = (e) => {
    e.preventDefault();
    const message = checkValidData(
      email?.current?.value,
      password?.current?.value,
      name?.current?.value
    );

    setErrors(message);
  };

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div>
        <img
          className="h-[100vh] w-full"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
      </div>

      <form
        onSubmit={formHandler}
        action=""
        className="w-3/12 bg-black absolute  top-[15%] mx-auto left-0 right-0 p-8 rounded-lg text-white bg-opacity-80 my-8"
      >
        <h1 className="text-3xl text-white font-bold text-left mb-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <div className="my-2">
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="w-full p-4  rounded-lg bg-gray-700 border-none outline-none "
            />
            <p className="text-red-700 text-left">{Errors?.name}</p>
          </div>
        )}
        <div className="my-2">
          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="w-full p-4 my-2 rounded-lg bg-gray-700 border-none outline-none "
          />
          <p className="text-red-700 text-left">{Errors?.email}</p>
        </div>
        <div className="my-2">
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="w-full p-4 my-2 rounded-lg bg-gray-700 border-none outline-none"
          />
          <p className="text-red-700 text-left">{Errors?.password}</p>
        </div>
        <button className="text-white bg-red-700 w-full p-4 rounded-lg my-4 text-xl">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        <h1 className="cursor-pointer" onClick={toggleSignIn}>
          {isSignIn
            ? "Don't have an account ? Sign Up "
            : "Already have an account ? Sign In"}
        </h1>
      </form>
    </div>
  );
};

export default Login;
