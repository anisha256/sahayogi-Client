import logo from '../../assets/sahayogi.png';
import React, { useState } from 'react';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Metamask from '../metamask/Metamask';

import { getToken } from '../constants/Constant';
// import { Link as LinkR} from 'react-router-dom'
const Wrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 10;
  height: 80px;
  display: flex;
  background-image: linear-gradient(
    to left,
    #8c908c,
    #777c7a,
    #646969,
    #535657,
    #424445,
    #393b3c,
    #313233,
    #292a2b,
    #262828,
    #242626,
    #222323,
    #202120
  );
  @media screen and (max-width: 768px) {
    display: flex;
    position: sticky;
    top: 0;
  }
`;
const NavbarLeft = styled.div`
  cursor: pointer;
  flex: 1;
  display: flex;
`;

const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    color: white;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
const NavbarRight = styled.div`
  cursor: pointer;
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 10px;
  margin: 20px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const MenuLink = styled.div`
  display: flex;
  padding-right: 2rem;
  cursor: pointer;
  text-align: center;
  transform: all o.3s ease-in;
  font-size: 15px;
  &:hover {
    color: black;
  }
`;

const MenuItem = styled.div`
  display: flex;
  justify-content: center;
  align-self: auto;
  gap: 1rem;
`;

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <Wrapper>
        <NavbarLeft>
          <img src={logo} alt='' />
        </NavbarLeft>

        <MobileIcon onClick={handleClick}>
          {click ? <FaArrowLeft /> : <FaBars />}
        </MobileIcon>
        <NavbarRight>
          <Link to='/'>
            <MenuLink>Home</MenuLink>
          </Link>
          <Link to='/about'>
            <MenuLink>About</MenuLink>
          </Link>
          <Link to='/donate'>
            <MenuLink>Donate</MenuLink>
          </Link>
          <Link to='/donationProject'>
            <MenuLink>Projects</MenuLink>
          </Link>

          {!getToken() ? (
            <Link to='/login'>
              <MenuLink>login</MenuLink>
            </Link>
          ) : (
            <Link to='/logout'>
              <MenuLink>logout</MenuLink>
            </Link>
          )}

          <MenuItem>
            <Metamask />
          </MenuItem>
        </NavbarRight>
      </Wrapper>
    </>
  );
};

export default Navbar;
