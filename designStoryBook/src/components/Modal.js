import React from "react";
import styled from "styled-components";
import {animated, useSpring} from "react-spring";
import { mgaTheme, typeScale, serifFont, sansSerifFont } from "../utils";
import { PrimaryButton, SecondaryButton } from "./buttons";
import { P, H1, H2, H3, H4, H5 } from "./text";
import { Input, Label } from "./input";
import { Illustrations } from "../assets";
import { CloseIcon } from "../assets/icons/CloseIcon";

const getAnimation = showSignUpModal => {
    return {
        opacity: showSignUpModal ? 1 : 0,
    };
};

const ModalWrapper = styled.div`
    width: 800px;
    height: 600px;
    box-shadow: 0 4px 16px rgba(0,0,0,0.2);
    background-color: neutralColorWhite;
    color: ${mgaTheme.textColorPrimary};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    margin: 2.0rem 0 2.0rem 0.5rem;
    `;

const LoginWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
    margin: 2.0rem auto;
    `;

const LoginIllustrationWrapper = styled.div`
    width: "50%", 
    height: "100%", 
    display: "flex", 
    justifyContent: "center", 
    alignItems: "center", 
    padding:".5rem"
    margin: ".5rem"
`;

const PageHeader = styled.div`
    display: block;
    margin: 1rem 0 0.5rem 0.5rem;
    font-size: ${typeScale.header3};
    font-family: ${sansSerifFont};
    color: ${mgaTheme.primaryColorDark};
    `;

const LoginForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    margin: 0.5rem 0 0.5rem 0;
    `;
const LoginButtonsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin: 1rem 0 1rem 0;
    justify-content: left;
    align-items: center;
    `;

const ForgotPasswordWrapper = styled.div`
    margin: 0 .5rem 0 .5rem;
    color: ${mgaTheme.textColorSecondary};
    `;

const SignUpText = styled.div`
    font-size: ${typeScale.paragraph};
    font-family: ${serifFont};
    maxWidth: 70%;
    text-align: center;
    `;
const LoginText = styled.div`
    font-size: ${typeScale.paragraph};
    font-family: ${serifFont};
    maxWidth: 50%;
    text-align: left;
    margin: 0.5rem;
    `;

const CloseModalButton = styled.button`
    cursor: pointer;
    background: none;
    border: none;
    position: absolute;
    right: 32px;
    top: 16px;
    width: 24px;
    height: 24px;
    padding: 0;
    margin: 16px 0 16px 0;
    `;

export const SignUpModal = ({showSignUpModal, setShowSignUpModal}) => {

    return (
        <animated.div style={useSpring(getAnimation(showSignUpModal))}>
            <ModalWrapper>
                <CloseModalButton 
                    aria-label="Close modal"
                    onClick={()=>setShowSignUpModal(false)}
                >
                    <CloseIcon />
                </CloseModalButton>
                <img 
                    src={Illustrations.SignUp}
                    alt="Sign up for an account"
                    aria-hidden="true"
                    width={"400px"}
                />
                <PageHeader>Sign Up Today!</PageHeader>
                <SignUpText>Sign up today to get access to all of our content and features!</SignUpText>    
                <div style={{marginTop: "2rem"}}>
                    <PrimaryButton onClick={()=>console.log("Signed Up!!")}>Sign Up!</PrimaryButton>
                </div>
            </ModalWrapper>
        </animated.div>
    );
};

export const LoginModal = ({showLoginModal, setShowLoginModal}) => {

    return (
        <animated.div style={useSpring(getAnimation(showLoginModal))}>
            <ModalWrapper>
                <CloseModalButton 
                    aria-label="Close modal"
                    onClick={()=>setShowLoginModal(false)}
                >
                    <CloseIcon />
                </CloseModalButton>
                <LoginWrapper>
                    <LoginIllustrationWrapper>
                        <img 
                            src={Illustrations.Login}
                            alt="Login to your account"
                            aria-hidden="true"
                            width={"400px"}
                        />
                    </LoginIllustrationWrapper>
                    <LoginForm style={{width: "50%", height: "100%"}}>
                        <PageHeader>Login</PageHeader>
                        <Label htmlFor="username">Email or Username</Label>
                        <Input id="username" type="text" placeholder="Username" style={{margin: "0.5rem", width:"80%"}}/>
                        <Label htmlFor="password">Password</Label>
                        <Input type="password" placeholder="Password" style={{margin: "0.5rem", width: "80%"}}/>
                        <LoginText>Login to your account to get access to all of our content and features!</LoginText>
                        <LoginButtonsWrapper>
                            <SecondaryButton onClick={()=>console.log("SignUp")}>SignUp</SecondaryButton>
                            <PrimaryButton onClick={()=>console.log("Logged In!!")}>Login</PrimaryButton>
                        </LoginButtonsWrapper>
                        <ForgotPasswordWrapper>
                            <P> <a href="#">Forgot Password?</a> </P>
                        </ForgotPasswordWrapper>
                    </LoginForm>
                </LoginWrapper>
            </ModalWrapper>
        </animated.div>
    )
}


