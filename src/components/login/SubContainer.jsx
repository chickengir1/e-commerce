import React from 'react';
import { SubContainer} from './styles/LoginStyles';
import {SignInButton} from "../register/styles/BlackBoxStyles";

const SubNav = ({ handleNavigation }) => (
  <SubContainer>
    <div style={{display : "flex" , gap : "15px"}}>
    <SignInButton >Forgot Password</SignInButton>
    <SignInButton  onClick={() => handleNavigation('/register')}>Sign Up</SignInButton>
    </div>
  </SubContainer>
);

export default SubNav;