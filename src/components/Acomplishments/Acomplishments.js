import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 4, text: 'Pays visités'},
  { number: 6, text: 'années de service pour la communauté', },
  { number: 4, text: 'Langues apprises', },
  { number: 1, text: 'Projet utile au monde', }
];

const Acomplishments = () => (
<Section>
  <SectionTitle>Accomplissements personnels</SectionTitle>
  <Boxes>
    {data.map((card,index) => (
      <Box key = {index}>
        <BoxNum>{card.number}</BoxNum>
        <BoxText>{card.text}</BoxText>
      </Box>
    ))}
  </Boxes>
</Section>
);

export default Acomplishments;
