import React from "react";
import styles from "./Result.module.css";

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

function Result({ correct }) {
  return (
    <div className={styles.resultContainer}>
      <div className={styles.resultBlock}>
        <div className={styles.result}>
          <div className={styles.containerCongratzIcon}>
            <img
              className={styles.congratzIcon}
              src="https://cdn-icons-png.flaticon.com/512/6334/6334281.png"
              alt="congratz"
            />
          </div>
          <div className={styles.textResult}>
            <p>
              Вы отгадали {correct} ответа из {questions.length}!
            </p>
          </div>
          <a href="/">
            <div className={styles.buttonTryAgain}>
              <p className={styles.textTryAgain}>Попробовать снова</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Result;
