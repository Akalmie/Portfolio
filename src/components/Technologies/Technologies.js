import React from 'react';
import { DiReact } from 'react-icons/di';
import { HiChip,HiCode } from "react-icons/hi";
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
<Section key='tech'>
  <SectionDivider/><br/>
  <SectionTitle>Technologies</SectionTitle>
  <SectionText>
    Au cours de mon parcours, j'ai eu l'occasion d'apprendre la maitrises de diverses technologies
  </SectionText>
  <List>
    <ListItem>
      <DiReact size ="2rem"/>
      <ListContainer>
        <ListTitle>Front-End</ListTitle>
        <ListParagraph>
          React.js
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <HiCode size ="2rem"/>
      <ListContainer>
        <ListTitle>Back-End</ListTitle>
        <ListParagraph>
          Node.js<br/>
          PHPMyAdmin <br/>
          Apache<br/>
          Arduino<br/>
          C/C++<br/>
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <HiChip size ="2rem"/>
      <ListContainer>
        <ListTitle>Compétences diverses</ListTitle>
        <ListParagraph>
          Windows/Linux<br/>
          Sysml/UML<br/>
          Scrum (méthode agile)
        </ListParagraph>
      </ListContainer>
    </ListItem>
  </List>
</Section>
);

export default Technologies;
