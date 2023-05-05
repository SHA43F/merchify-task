import Button from "@/pages/UI/Button";
import { useState } from "react";

const Completed = (props: any) => {
  const percentile = (props.correct / props.QA.length) * 100;
  const [wrong, setWrong] = useState(props.wrong);
  return (
    <div className="z-40 bg-white fixed rounded-lg h-screen w-screen sm:h-[95vh] sm:w-[50vw] transition-all justify-around">
      <div className="flex flex-col h-full items-center justify-between">
        <h1>React Quiz</h1>
        <div className=" shadow-lg bg-sky-200 shadow-gray-200 rounded-md w-2/3 md:w-1/2 flex flex-col items-center m-4 py-2 px-1 justify-between">
          <h2>You scored</h2>
          <h1>{percentile}%</h1>
          <p className="text-xs sm:text-base">
            {percentile >= 50
              ? "You have good knowledge in react"
              : "You can do better"}
          </p>
        </div>
        <div className="flex flex-row justify-around w-full ">
          <div className="shadow-md shadow-gray-200 rounded-md w-1/3 flex flex-col items-center bg-fuchsia-300">
            <p>Your score</p>
            <h1>
              {props.correct}/{props.QA.length}
            </h1>
          </div>
          <div className="shadow-md shadow-gray-200 rounded-md w-1/3 flex flex-col items-center bg-fuchsia-300">
            <p>Time Taken</p>
            <h1>{props.formatTime(props.time)}</h1>
          </div>
        </div>
        <div className="p-4 shadow-lg shadow-gray-200 rounded-md bg-gray-100 w-11/12 m-3">
          {wrong.length > 0 ? (
            <>
              <h2>Correct answers for the questions</h2>
              <ul>
                {wrong.map((element: any, index: number) => (
                  <li key={index}>
                    <div className="flex flex-row items-center">
                      <i className="ri-checkbox-blank-circle-fill"></i>
                      <p className="text-[12px] sm:text-[14px] font-bold text-justify px-1">
                        {element.question}
                      </p>
                    </div>
                    <p className="bg-green-400 w-fit rounded-md px-2 mx-5 text-[12px] sm:text-[14px]">
                      {element.correct}
                    </p>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <h2 className=" text-justify">
              You've answered correct for all of the questions
            </h2>
          )}
        </div>
        <Button onClick={props.onClick}>Reattempt Quiz </Button>
      </div>
    </div>
  );
};

export default Completed;
