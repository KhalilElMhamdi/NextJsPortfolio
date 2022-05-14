import React from 'react';
import { FiFigma } from 'react-icons/fi';
import { GiComputing, GiPaintBrush } from 'react-icons/gi';
import { SiAdobexd, SiLaravel, SiPhp } from 'react-icons/si';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
      <SectionTitle>Skills & Technologies</SectionTitle>
      <List>
      <ListItem>
        <DiReact size="6rem"/><br />    
        <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              Experience with <br />
              Javascript, React.js
            </ListParagraph>
          </ListContainer>
      </ListItem>
      <ListItem>
        <GiComputing size="6rem"/> <br />
        <ListContainer>
            <ListTitle>Back-End</ListTitle>
            <ListParagraph>
              Experience with <br />
              php <SiPhp size="2rem"/>, Laravel <SiLaravel />
            </ListParagraph>
          </ListContainer>
      </ListItem>
      <ListItem>
        <GiPaintBrush size="6rem"/><br />
        <ListContainer>
            <ListTitle>UI & UX</ListTitle>
            <ListParagraph>
              Tools like  <br />
              Adobe <SiAdobexd /> , Figma <FiFigma /> <br/>
              and photoshop
            </ListParagraph>
          </ListContainer>
      </ListItem>
      </List>
  </Section>
);

export default Technologies;
