import styled from "styled-components";
import { GlobalStyles } from "./components/Globals";
import Section from "./components/Section.tsx";
import { useState } from "react";

import DesktopBg from './assets/bg-pattern-desktop.svg';
import MobileBg from './assets/bg-pattern-mobile.svg';
import IllustrationBox from './assets/illustration-box-desktop.svg';
import WomanDesktop from './assets/illustration-woman-online-desktop.svg';
import WomanMobile from './assets/illustration-woman-online-mobile.svg';

import DATA from "./data/Qeustion_Answer.ts";

function App() {
  const [activeNumber, setActiveNumber] = useState<null | number>(null);

  return (
    <>
      <GlobalStyles />
      <Main>
        <WomanMobileImage src = {WomanMobile}></WomanMobileImage>
        <IllustrationBoxImage src = {IllustrationBox}></IllustrationBoxImage>
        <Title>FAQ</Title>

        { DATA.map((item, index) => {
          return (
            <Section 
            key={ index }
            question={ item.question }
            answer = { item.answer }
            currentNumber={ index }
            activeNumber={ activeNumber }
            setActiveNumber={ setActiveNumber }/>
          )
        })}

      </Main>
    </>
  );
}

const Main = styled.main`
  padding: 13.2rem 2.4rem 4.8rem;
  background: #ffffff;
  box-shadow: 0px 50px 50px -20px rgba(53, 18, 122, 0.497159);
  border-radius: 23px;
  font-size: 1.3rem;
  line-height: 1.2em;
  font-weight: 400;
  display: flex;
  gap: 1.9rem;
  flex-direction: column;
  align-items: center;
  background-image: url(${MobileBg});
  background-repeat: no-repeat;
  background-position: top 0 left 50%;
  position: relative;

  @media (min-width: 90em) {
    padding: 6.5rem 9.5rem 8.3rem 47.6rem;
    align-items: flex-start;
    background-image: url(${WomanDesktop}), url(${DesktopBg});
    background-position: top 50% left -9rem, top 50% right 53.2rem;
    font-size: 1.5rem;
  }
`;

const Title = styled.h1`
  font-size: 3.2rem;
  line-height: 1.25em;
  color: #1e1f36;

  @media (min-width: 90em) {
    margin-bottom: 4.5rem;
  }
`;

const WomanMobileImage = styled.img`
  width: 23.7rem;
  height: 18rem;
  position: absolute;
  top: -10.5rem;
  display: block;

  @media (min-width: 90em){
    display: none;
  }
`

const IllustrationBoxImage = styled.img`
  display: none;

  @media (min-width: 90em) {
    display: block;
    position: absolute;
    top: 40.5%;
    left: -9rem;
  }
`

export default App;
