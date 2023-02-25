import React from "react";
import styles from "./Game.module.css";

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

function Game({ step, question, onClickVariant }) {
  const precentage = Math.round((step / questions.length) * 100);

  return (
    <div className={styles.gameContainer}>
      <div className={styles.main}>
        <div>
          <div
            style={{ width: `${precentage}%` }}
            className={styles.progressBarColor}
          ></div>
          <div className={styles.progressBarGrey}></div>
        </div>
        <h1 className={styles.question}>{question.text}</h1>
        <ul className={styles.answerList}>
          {question.variants.map((text, index) => (
            <li
              key={text}
              className={styles.answer}
              onClick={() => onClickVariant(index)}
            >
              {text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Game;
