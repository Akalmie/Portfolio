import React from 'react';
import { AiFillGitlab, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
<FooterWrapper>
  <LinkList>
    <LinkColumn>
    <LinkTitle>Email</LinkTitle>
    <LinkItem href = "mailto:pinhodavid@protonmail.com">Un mail? Par ici</LinkItem>
    </LinkColumn>
  </LinkList>
  <SocialIconsContainer>
    <CompanyContainer>
      <Slogan>Change le monde un pas après l'autre.</Slogan>
    </CompanyContainer>
    <SocialContainer>
    <SocialIcons href ="https://gitlab.com/Akalmie">
      <AiFillGitlab size ="3rem"/>
    </SocialIcons>
    <SocialIcons href ="https://www.linkedin.com/in/david-pinho-a32929159/">
      <AiFillLinkedin size ="3rem"/>
    </SocialIcons>
    </SocialContainer>
  </SocialIconsContainer>
</FooterWrapper>
  );
};

export default Footer;
