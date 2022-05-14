import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import Button from '../../styles/GlobalComponents/Button';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+212 7622-66831">+212 762266831</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:khalilelmhamdi3@gmail.com">khalilelmhamdi3@gmail.com</LinkItem>
        </LinkColumn>
        <SocialContainer>
            <SocialIcons>
            <SocialIcons href="https://github.com/KhalilElMhamdi"> <AiFillGithub size="3rem"/></    SocialIcons>
            <SocialIcons href=""> <AiFillInstagram size="3rem"/></SocialIcons>
            <SocialIcons href=""> <AiFillLinkedin size="3rem"/></SocialIcons>
            </SocialIcons>
        </SocialContainer>
      </LinkList>
    
   
      
    </FooterWrapper>
  );
};

export default Footer;
