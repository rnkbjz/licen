import React from 'react'
import { SidebarContainer,Icon,CloseIcon,SidebarWrapper,SidebarMenu,SidebarLink,SideBtnWrap,SidebarRoute } from './SideBarElements'

const Sidebar = ({isOpen,toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon/>
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to ="membership" onClick={toggle}>
                    Członkostwo
                </SidebarLink>
                <SidebarLink to ="about" onClick={toggle}>
                    Usługi
                </SidebarLink>
                <SidebarRoute to ="/register" onClick={toggle}>
                    Rejestracja
                </SidebarRoute>     
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to ="/signin" onClick={toggle}>
                    Rejestracja
                </SidebarRoute>
            </SideBtnWrap>
            <SideBtnWrap>
                <SidebarRoute to ="/signin" onClick={toggle}>
                    Login
                </SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar