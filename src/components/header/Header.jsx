import styled from '@emotion/styled';
import React from 'react'
import { Link } from 'react-router-dom'
import logoIram from "../../assets/logo/logo_iram-transparent-responsive.png";
import useGlobalContext from '../../hooks/useGlobalContext';
import LogoutIcon from '@mui/icons-material/Logout';
import { APROBACION_URL } from '../../constants/constant';

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

const UserNameStyled = styled.div`
    display: flex;
    margin-top: -1rem ;
    margin-right: 10px;
    align-items: center;
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
  return (
    <HeaderStyled>
        <div>
            <LinkStyled to={"/"}>
                <Logo src={logoIram} alt="home" />
                <span>Ordenes de credito</span>
            </LinkStyled>
        </div>
        {
            global?.userName 
            &&
        <UserNameStyled>
            <span>
                {global.userName}
            </span>
            <LogoutButtonStyled onClick={handleLogout}>
                <LogoutIcon />
            </LogoutButtonStyled>
        </UserNameStyled>
        }
    </HeaderStyled>
  )
}

export default Header