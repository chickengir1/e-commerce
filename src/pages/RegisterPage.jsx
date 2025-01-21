import React from "react";
import { useNavigate } from "react-router-dom";
import Register from "../components/register/register.jsx";
import {
  WelcomeTitle,
  WelcomeText,
  SignInButton,
} from "../components/register/styles/BlackBoxStyles";
import { AnimatedwhitekBox } from "../components/login/styles/LoginStyles.js";
import useAnimation from "../hook/useAnimaiton";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [boxRef, isBoxVisible] = useAnimation();

  const handleSignInClick = () => {
    navigate("/login");
  };

  return (
    <div style={{ display: "flex", width: "90%", height: "100vh" }}>
      <AnimatedwhitekBox ref={boxRef} className={isBoxVisible ? "visible" : ""}>
        <WelcomeTitle>Welcome Back!</WelcomeTitle>
        <WelcomeText>
          Enter your personal details to use all of site features
        </WelcomeText>
        <SignInButton onClick={handleSignInClick}>SIGN IN</SignInButton>
      </AnimatedwhitekBox>
      <div style={{ width: "50%" }}>
        <Register />
      </div>
    </div>
  );
};

export default RegisterPage;
