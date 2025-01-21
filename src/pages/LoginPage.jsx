import React from "react";
import { useNavigate } from "react-router-dom";
import Login from "../components/login/login";
import {
  WelcomeTitle,
  WelcomeText,
} from "../components/register/styles/BlackBoxStyles";
import {
  VerticalContainer,
  LoginSection,
  AnimatedBlackBox,
} from "../components/login/styles/LoginStyles";
import SubNav from "../components/login/SubContainer";
import useAnimation from "../hook/useAnimaiton";

const LoginPage = () => {
  const navigate = useNavigate();
  const [boxRef, isBoxVisible] = useAnimation();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <VerticalContainer>
      <LoginSection>
        <Login />
      </LoginSection>
      <AnimatedBlackBox
        ref={boxRef}
        className={isBoxVisible ? 'visible' : ''}
      >
        <WelcomeTitle>Hello, Friend!</WelcomeTitle>
        <WelcomeText>
          Register with your personal details to use all of site features
        </WelcomeText>
        <SubNav handleNavigation={handleNavigation}></SubNav>
      </AnimatedBlackBox>
    </VerticalContainer>
  );
};

export default LoginPage;
