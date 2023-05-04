import { useEffect, useState, useRef } from "react";
import Questions from "./Questions";
import Completed from "./Completed";

type Question = {
  question: string;
  options: string[];
  answer: number;
};

const QA: Question[] = [
  {
    question: "This is question 1",
    options: ["option1", "option2", "option3", "option4"],
    answer: 2
  },
  {
    question: "This is question 2",
    options: ["option1", "option2", "option3", "option4"],
    answer: 4
  },
  {
    question: "This is question 3",
    options: ["option1", "option2", "option3", "option4"],
    answer: 1
  },
  {
    question: "This is question 4",
    options: ["option1", "option2", "option3", "option4"],
    answer: 3
  }
];

const TestPage = () => {
  const [active, setActive] = useState<number>(0);
  const [selectOption, setSelectOption] = useState<number | null>(null);
  const [correct, setCorrect] = useState<number>(0);
  const [completed, setCompleted] = useState<boolean>(false);
  const [time, setTime] = useState<number>(0);
  const timerRef = useRef(null);

  const { question, options, answer } = QA[active];

  const changeOption = (event: any): void => {
    setSelectOption(parseInt(event.target.value, 0));
  };

  const handleNextClick = (): void => {
    setSelectOption(null);
    if (answer === selectOption + 1) {
      setCorrect((value) => value + 1);
    }
    if (active < QA.length - 1) {
      setActive((active) => active + 1);
    } else {
      setCompleted(true);
      clearInterval(timerRef.current);
    }
  };

  const formatTime = (timeInSeconds: number): string => {
    const minutes = Math.floor(timeInSeconds / 60)
      .toString()
      .padStart(2, "0");

    const seconds = Math.floor(timeInSeconds % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, []);

  useEffect(() => {
    if (time >= 60) {
      setCompleted(true);
      clearInterval(timerRef.current);
    }
  }, [time]);

  return (
    <>
      {!completed ? (
        <>
          <h3>
            {active + 1} / {QA.length}
          </h3>
          <h3>{formatTime(time)}</h3>
          <Questions
            question={question}
            options={options}
            selectOption={selectOption}
            changeOption={changeOption}
          />
          {selectOption !== null && (
            <button onClick={handleNextClick}>
              {active < QA.length - 1 ? "Next" : "Submit"}
            </button>
          )}
        </>
      ) : (
        <Completed
          correct={correct}
          QA={QA}
          formatTime={formatTime}
          time={time}
        />
      )}
    </>
  );
};

export default TestPage;
