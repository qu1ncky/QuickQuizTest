import React from "react";
import { useState } from "react";
import Result from "./Components/Result/Result";
import Game from "./Components/Game/Game";

const questions = [
  {
    text: "Мама разрабов?..",
    variants: ["Шлюха", "Дура", "Мразь"],
    correct: [0, 1, 2],
  },
  {
    text: "Снайперки ваншотят?",
    variants: ["Да", "Нет", "Мама разраба шлюха"],
    correct: [1, 2],
  },
  {
    text: "Сколько Степа вчера сыграл напов соло?(25.02)",
    variants: ["7", "5", "12"],
    correct: [2],
  },
  {
    text: "Максюша написал опросник без повторного просмотра видоса?",
    variants: [
      "Нет, конечно, блять!😡",
      "Да! Да! Максимка сделал все сам, он умный!🤓",
      "Максюша ебучий овощь!😭",
    ],
    correct: [0, 3],
  },
  {
    text: "Сколько щенков закопал MAXUWA?😱😱😱",
    variants: [3, 4, 5],
    correct: [1],
  },
  {
    text: "Максюша молодец?😇",
    variants: ["Да", "Нет", "MAXUWA"],
    correct: [0, 2],
  },
];

function App() {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const question = questions[step];

  const onClickVariant = (index) => {
    setStep(step + 1);
    for (let i = 0; i < question.correct.length; i++) {
      if (index === question.correct[i]) {
        setCorrect(correct + 1);
      }
    }
  };

  return (
    <div className="App">
      {step !== questions.length ? (
        <Game
          step={step}
          question={question}
          onClickVariant={onClickVariant}
        ></Game>
      ) : (
        <Result correct={correct}></Result>
      )}
    </div>
  );
}

export default App;
