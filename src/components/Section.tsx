import styled, { css } from "styled-components";
import ArrowIcon from "../assets/icon-arrow-down.svg";

interface IProps {
  question: string,
  answer: string,
  currentNumber: number
  activeNumber: number | null
  setActiveNumber: (number: number | null) => void;
}

export default function Section(props: IProps): JSX.Element {

  const handleAnswer = () => {
    if (props.currentNumber === props.activeNumber) {
      props.setActiveNumber(null);
    } else {
      props.setActiveNumber(props.currentNumber);
    }
    
  };

  return (
    <Container>
      <QuestionBox>
        <Question currentNumber={props.currentNumber} activeNumber = {props.activeNumber} onClick={handleAnswer}>
          {props.question}
        </Question>
        <Arrow
          src={ArrowIcon}
          alt="arow icon"
          currentNumber={props.currentNumber} activeNumber = {props.activeNumber}
          onClick={handleAnswer}
        />
      </QuestionBox>
      {props.currentNumber === props.activeNumber
      ? 
        <Answer currentNumber = {props.currentNumber}>{props.answer}</Answer> 
      : 
      null}
    </Container>
  );
}

const Container = styled.div`
  width: 27.9rem;
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
  padding-bottom: 1.8rem;
  border-bottom: 1px solid #e8e8ea;

  @media (min-width: 90em) {
    width: 35rem;
  }
`;

const QuestionBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

interface IShowAnswer {
  currentNumber: number,
  activeNumber: number | null
}

const Question = styled.p<IShowAnswer>`
  ${(props) => css`
    width: 33ch;
    color: ${props.currentNumber === props.activeNumber ? "#1E1F36" : "#4B4C5F"};
    cursor: pointer;
    transition: 0.3s;
    font-weight: ${props.currentNumber === props.activeNumber ? "700" : "400"};

    &:hover {
      color: #f47b56;
    }
  `}
`;

const Arrow = styled.img<IShowAnswer>`
  ${(props) => css`
    cursor: pointer;
    transition: 0.3s;
    transform: Rotate(${props.currentNumber === props.activeNumber ? "180deg" : "0deg"});
  `}
`;

const Answer = styled.p<{ currentNumber: number }>`
  font-size: 1.2rem;
  line-height: 1.5em;
  color: #787887;
`;
