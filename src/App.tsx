import styled from "styled-components";
import { GlobalStyles } from "./components/Globals";
import Section from "./components/Section.tsx";
import { useState } from "react";

function App() {
  const [activeNumber, setActiveNumber] = useState<null | number>(null);

  return (
    <>
      <GlobalStyles />
      <Main>
        <Title>FAQ</Title>
        <Section
          question={"How many team members can I invite?"}
          answer={
            "You can invite 5 people maximum, but if you purchase pro membership, you will abel to invite 15 people"
          }
          currentNumber = {1}
          activeNumber = { activeNumber }
          setActiveNumber = {setActiveNumber}
        />
        <Section
          question={"What is the maximum file upload size?"}
          answer={
            "No more than 2GB. All files in your account must fit your allotted storage space."
          }
          currentNumber = {2}
          activeNumber = { activeNumber }
          setActiveNumber = {setActiveNumber}
        />
        <Section
          question={"How do I reset my password?"}
          answer={"You can find that information on our website"}
          currentNumber = {3}
          activeNumber = { activeNumber }
          setActiveNumber = {setActiveNumber}
        />
        <Section
          question={"Can I cancel my subscription?"}
          answer={
            "Yes, you can. But keep in mind that there are no refunds if you cancel it in the middle of month"
          }
          currentNumber = {4}
          activeNumber = { activeNumber }
          setActiveNumber = {setActiveNumber}
        />
        <Section
          question={"Do you provide additional support?"}
          answer={"Yes, we do. You can find that information on our website"}
          currentNumber = {5}
          activeNumber = { activeNumber }
          setActiveNumber = {setActiveNumber}
        />
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
`;

const Title = styled.h1`
  font-size: 3.2rem;
  line-height: 1.25em;
  color: #1e1f36;
`;

export default App;
