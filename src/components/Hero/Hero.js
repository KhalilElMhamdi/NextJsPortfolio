import React from 'react';
import { CgHello } from "react-icons/cg";

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
      <CgHello /> Hello I'am<br/>
        Khalil 
      </SectionTitle>
      <SectionText>
      Web Developer & UI Designer
      </SectionText>
      <Button onClick={()=> window.location = 'https://github.com/KhalilElMhamdi'}>GET IN TOUCH</Button>
    </LeftSection>
  </Section>
);

export default Hero;