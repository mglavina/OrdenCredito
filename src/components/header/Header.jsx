import styled from '@emotion/styled';
import React from 'react'
import { Link } from 'react-router-dom'
import logoIram from "../../assets/logo/logo_iram-transparent-responsive.png";

const Logo = styled.img`
    width:3.5rem ;
    aspect-ratio: 1/1;
`;

const HeaderStyled = styled.header`
    width: 100%;
    height: 7rem;
    display: flex;
    justify-content: space-between;
    position: relative;
`;
const LinkStyled = styled(Link)`
    margin-left: 2rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: black;
    span{
        margin-left: 0.7rem;
        font-size: 2rem;
        font-weight: 800;
    }
`;
const Header = () => {
  return (
    <HeaderStyled>
        <div>
            <LinkStyled to={"/"}>
                <Logo src={logoIram} alt="home" />
                <span>Ordenes de credito</span>
            </LinkStyled>
        </div>
    </HeaderStyled>
  )
}

export default Header