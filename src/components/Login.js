import React from "react";
import Header from "./Header";

import LoginForm from "./LoginForm";

const Login = () => {
 
  return (
    <div>
      <div>
        <img
          className="h-[100vh] w-full"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
      </div>
          <LoginForm/>
    
    </div>
  );
};

export default Login;
