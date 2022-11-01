import styled from '@emotion/styled';
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import logoIram from "../../assets/logo/logo_iram-transparent-responsive.png";
import useGlobalContext from '../../hooks/useGlobalContext';
import LogoutIcon from '@mui/icons-material/Logout';
import { APROBACION_URL } from '../../constants/constant';
import Avatar from '@mui/material/Avatar';

const Logo = styled.img`
    width:3.5rem ;
    aspect-ratio: 1/1;
`;

const HeaderStyled = styled.header`
    width: 100%;
    height: 6rem;
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

const UserNameStyled = styled.div`
    display: flex;
    margin-right: 10px;
    align-items: center;
`;

const LogoStyled = styled.div`
    display: flex;
    align-items: center;
`;

const NavStyled = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    a{
        margin-right: 1rem;
    }
    .current{
        text-decoration: underline;
    }
`;

const LogoutButtonStyled = styled.button`
    margin: 0 10px;
    padding: 5px;
    border: none;
    background-color: none;
    cursor: pointer;
    border-radius: 2px;
    &:active{
            background-color: #818283;
        }
`;

const handleLogout = () => {
    window.location.href = APROBACION_URL + "/.auth/logout"
}



const Header = () => {
    const {global,setGlobal} = useGlobalContext()
    const location = useLocation();
    console.log({location});
  return (
    <HeaderStyled>
        <LogoStyled>
            <LinkStyled to={"/"}>
                <Logo src={logoIram} alt="home" />
                <span>Ordenes de credito</span>
            </LinkStyled>
        </LogoStyled>
        {
            global?.userName 
            &&
        <UserNameStyled>
            <NavStyled>
                <Link className={location.pathname === "/" && "current"} to={"/"}>Pendientes</Link>
                <Link className={location.pathname === "/historico" && "current"} to={"/historico"}>Aprobadas</Link>
            </NavStyled>
            <Avatar title={global?.userName} children={`${global?.userName.split(' ')[0][0]}${global?.userName.split(' ')[1][0]}`} />
            <LogoutButtonStyled onClick={handleLogout}>
                <LogoutIcon />
            </LogoutButtonStyled>
        </UserNameStyled>
        }
    </HeaderStyled>
  )
}

export default Header