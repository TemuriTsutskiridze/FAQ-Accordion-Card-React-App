import styled, { css } from "styled-components"
import ArrowIcon from '../assets/icon-arrow-down.svg'
import { useState } from "react"


interface IProps {
  question: string,
  answer: string,
}

export default function Section (props: IProps): JSX.Element {
  const [showAnswer, setShowAnswer] = useState<boolean>(false);

  const handleAnswer = () => {
    setShowAnswer(!showAnswer);
  }

    return (
      <Container>
        <QuestionBox>
            <Question onClick={ handleAnswer } showAnswer = { showAnswer }>{props.question}</Question>
            <Arrow src={ArrowIcon} alt = "arow icon" onClick={ handleAnswer } showAnswer = { showAnswer }/>
        </QuestionBox>
        <Answer showAnswer = {showAnswer} >{props.answer}</Answer>
      </Container>
    )
}




const Container = styled.div`
  width: 27.9rem;
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
  padding-bottom: 1.8rem;
  border-bottom: 1px solid #E8E8EA;
`

const QuestionBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

interface IShowAnswer {
  showAnswer: boolean
}

const Question = styled.p<IShowAnswer>`
  ${props => css`
    width: 33ch;
    color: ${props.showAnswer ? "#1E1F36" : "#4B4C5F"};
    cursor: pointer;
    transition: 0.3s;
    font-weight: ${props.showAnswer ? "700" : "400"};

    &:hover {
      color: #F47B56;
    }
  `}
  
`

const Arrow = styled.img<IShowAnswer>`
  ${props => css`
    cursor: pointer;
    transition: 0.3s;
    transform: Rotate(${props.showAnswer ? "180deg": "0deg"})
  `}
`

const Answer = styled.p<IShowAnswer>`
  ${props => css`
    font-size: 1.2rem;
    line-height: 1.5em;
    color: #787887;
    display: ${props.showAnswer ? "block": "none"};
  `}
  
`