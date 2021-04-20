import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './style';

const Sidebar = (isOpen, toggle) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="/nlc"> Home </SidebarLink>
                    <SidebarLink to="/nlc/About"> About </SidebarLink>
                    <SidebarLink to="/nlc/games"> Games </SidebarLink>
                    <SidebarLink to="/nlc/Staking"> Staking </SidebarLink>
                    <SidebarLink to="/nlc/Socials"> Socials </SidebarLink>
                    <SidebarLink to="/nlc/Contact"> Contact </SidebarLink>
                </SidebarMenu>
                {/* <SideBtnWrap>
                    <SidebarRoute to="/signup">Sign Up</SidebarRoute>
                </SideBtnWrap> */}
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
