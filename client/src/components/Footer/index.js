import React from 'react'
import {FaFacebook,FaInstagram,FaTwitter,FaLinkedinIn} from 'react-icons/fa'
import { 
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,
 } from './FooterElements'

const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>O nas</FooterLinkTitle>
                            <FooterLink to='/signin'>Zasady działania</FooterLink>
                            <FooterLink to='/signin'>Inwestorzy</FooterLink>
                            <FooterLink to='/signin'>Warunki użytkowania</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Informacje</FooterLinkTitle>
                            <FooterLink to='/signin'>Kontakt</FooterLink>
                            <FooterLink to='/signin'>Pomoc Techniczna</FooterLink>
                            <FooterLink to='/signin'>Współpraca</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLink to='/signin'>Facebook</FooterLink>
                            <FooterLink to='/signin'>Instagram</FooterLink>
                            <FooterLink to='/signin'>Youtube</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/'>
                        Licen
                    </SocialLogo>
                    <WebsiteRights>Licen © {new Date().getFullYear()} All rights reserved</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href='//www.facebook.com' target='_blank' aria-label="Facebook">
                        <FaFacebook/>
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank' aria-label="Facebook">
                        <FaTwitter/>
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank' aria-label="Facebook">
                        <FaInstagram/>
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank' aria-label="Facebook">
                        <FaLinkedinIn/>
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer