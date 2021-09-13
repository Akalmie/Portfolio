import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
<Section row nopadding>
  <LeftSection>
    <SectionTitle main center>
      Bienvenue Sur <br/>
      Mon Portfolio.
    </SectionTitle>
    <SectionText>
      Mon but est d'apprendre et de developper mon savoir afin d'améliorer mes compétences. Je suis en constante compétition contre moi même.
    </SectionText>
    <Button onClick={() =>window.location ='https://google.com'}>En savoir plus</Button>
  </LeftSection>
</Section>
);

export default Hero;