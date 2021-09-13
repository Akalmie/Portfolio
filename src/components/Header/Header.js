import Link from 'next/link';
import React from 'react';
import { AiFillGitlab, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
<Container>
  <Div1>
    <Link href="/">
      <a style={{ display : "flex" , alignItems : "center" , color : "white", marginBottom:'20px'}}>
        <DiCssdeck size= "3rem"/> <Span>Portofolio</Span> 
      </a>
    </Link>
  </Div1>
  <Div2>
    <li>
      <Link href ="#projects">
        <NavLink>Projets</NavLink>
      </Link>
    </li>
    <li>
      <Link href ="#tech">
        <NavLink>Technologies</NavLink>
      </Link>
    </li>
    <li>
      <Link href ="#about">
        <NavLink>A propos</NavLink>
      </Link>
    </li>
  </Div2>
  <Div3>
  <SocialIcons href ="https://gitlab.com/Akalmie">
      <AiFillGitlab size ="3rem"/>
    </SocialIcons>
    <SocialIcons href ="https://github.com/Akalmie">
      <AiFillGithub size ="3rem"/>
    </SocialIcons>
    <SocialIcons href ="https://www.linkedin.com/in/david-pinho-a32929159/">
      <AiFillLinkedin size ="3rem"/>
    </SocialIcons>
  </Div3>
</Container>
);

export default Header;
