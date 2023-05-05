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
    question:
      "Which of the following is used in React.js to increase performance?",
    options: ["Virtual DOM", "Original DOM", "Both A & B", "None of the above"],
    answer: 1
  },
  {
    question:
      "Which of the following is used to pass data to a component from outside in React?",
    options: ["Elements", "Render with arguments", "setState", "Props"],
    answer: 4
  },
  {
    question: "Identify the smallest building block of React.JS.",
    options: ["Props", "Components", "Elements", "None of the above"],
    answer: 2
  },
  {
    question:
      "Which of the following option is correct in the case of the Babel?",
    options: ["Compiler", "Transpilar", "Both A & B", "None of the above"],
    answer: 3
  }
];

const TestPage = (props: any) => {
  const [active, setActive] = useState<number>(0);
  const [selectOption, setSelectOption] = useState<number | null>(null);
  const [correct, setCorrect] = useState<number>(0);
  const [wrong, setWrong] = useState<[]>([]);
  const [completed, setCompleted] = useState<boolean>(false);
  const [time, setTime] = useState<number>(0);
  const timerRef = useRef(null);

  const { question, options, answer } = QA[active];

  const changeOption = (value: number): void => {
    setSelectOption(parseInt(value, 0));
  };

  const handleNextClick = (): void => {
    setSelectOption(null);
    if (answer === selectOption + 1) {
      setCorrect((value) => value + 1);
    }
    if (answer !== selectOption + 1) {
      const currentQuestion = QA[active];
      let wrongAns = [
        ...wrong,
        {
          question: currentQuestion.question,
          correct: currentQuestion.options[currentQuestion.answer - 1]
        }
      ];
      setWrong(wrongAns);
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
    <div
      data-aos="fade-left"
      data-aos-anchor="#example-anchor"
      className="z-30 bg-white fixed rounded-lg h-screen w-screen sm:h-[95vh] sm:w-[50vw] transition-all justify-around"
    >
      {!completed ? (
        <div className="flex flex-col h-full justify-between">
          <div>
            <div className=" w-full flex flex-row justify-between p-5">
              <p className=" bg-blue-500 text-white px-4 rounded-lg">
                {Math.floor(active + 1)
                  .toString()
                  .padStart(2, "0")}{" "}
                / {Math.floor(QA.length).toString().padStart(2, "0")}
              </p>
              <p className=" bg-green-500 text-white px-4 rounded-lg">
                {formatTime(time)}
              </p>
            </div>
            <Questions
              question={question}
              options={options}
              selectOption={selectOption}
              changeOption={changeOption}
            />
          </div>

          <button
            onClick={handleNextClick}
            className={
              selectOption !== null
                ? "m-3 px-4 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-400"
                : "bg-blue-200 m-3 px-4 py-1 text-white rounded-md "
            }
            disabled={selectOption === null}
          >
            {active < QA.length - 1 ? "Next" : "Submit"}
          </button>
        </div>
      ) : (
        <Completed
          correct={correct}
          QA={QA}
          formatTime={formatTime}
          time={time}
          wrong={wrong}
          onClick={props.onClick}
        />
      )}
    </div>
  );
};

export default TestPage;
