import React from 'react';
import {FaBars} from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll/modules';
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink} from './NavbarElements'

const Navbar = ({toggle}) => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

  return (
    <>
    <Nav>
        <NavbarContainer>
            <NavLogo to ='/' onClick={toggleHome}>
            <h1>Witaj</h1>
            </NavLogo>
            <MobileIcon onClick={toggle}>
                <FaBars />
            </MobileIcon>
            <NavMenu>          
                <NavItem>
                    <NavLinks to="discover" smooth={true} duration={500} spy={true} exact='true'>Członkostwo</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="services" smooth={true} duration={500} spy={true} exact='true'>Usługi</NavLinks>
                </NavItem>                
                <NavItem>
                    <NavLinks to="signup" smooth={true} duration={500} spy={true} exact='true'>Rejestracja</NavLinks>
                </NavItem>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to ='/register'>Rejestracja</NavBtnLink>
                <NavBtnLink to ='/login'>Logowanie</NavBtnLink>
            </NavBtn>
            
        </NavbarContainer>
    </Nav>
    </>
  )
}

export default Navbar