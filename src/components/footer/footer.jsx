import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGitlab } from "@fortawesome/free-brands-svg-icons";
import { faStore } from "@fortawesome/free-solid-svg-icons";

const FooterContainer = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    padding: 20px;
    background-color: #f9f9f9;
`;

const DeveloperInfo = styled.div`
    font-size: 16px;
    color: #57638A;

    a {
        color: #57638A;
        text-decoration: none;
    }
`;

const ProjectLink = styled.div`
    font-size: 16px;
    color: #57638A;

    a {
        color: #57638A;
        text-decoration: none;
        margin-left: 10px;
        display: inline-flex;
        align-items: center;
    }
`;

const Footer = () => {
    const navigate = useNavigate();

    return (
        <FooterContainer>
            <DeveloperInfo>
                <FontAwesomeIcon icon={faStore} style={{ marginRight: "5px" }} />
                <span>Elice Store Developed by </span>
                <a href="https://example.com">2TEAM</a>
            </DeveloperInfo>
            <ProjectLink>
                <a href="https://gitlab.com">
                    <FontAwesomeIcon icon={faGitlab} size="2x" />
                </a>
            </ProjectLink>
        </FooterContainer>
    );
};

export default Footer;
