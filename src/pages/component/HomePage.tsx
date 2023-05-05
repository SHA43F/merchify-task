import { useCallback, useState } from "react";
import StartQuiz from "./StartQuizPortal";
import TestPage from "./TestPageComponent/TestPage";
import Button from "../UI/Button";
import ReactImage from "../../assets/react.webp";
import Image from "next/image";
import styles from "./HomePage.module.css";

const HomePage = () => {
  const [startQuiz, showStartQuiz] = useState<boolean>(false);
  const [startTest, setStartTest] = useState<boolean>(false);

  //Function for opening the modal to start the quiz
  const openStartQuiz = useCallback(() => {
    showStartQuiz(true);
  }, []);

  //Function for closing the modal to start the quiz
  const closeStartQuiz = useCallback(() => {
    showStartQuiz(false);
  }, []);

  //Function for starting the test on clicking the start test button also closes the modal
  const openStartTest = useCallback(() => {
    showStartQuiz(false);
    setStartTest((startTest) => !startTest);
  }, []);

  return (
    <div className={styles.HomePage}>
      <div className="flex items-center flex-col justify-around h-full">
        <Image
          src={ReactImage}
          alt="React Quiz"
          className={styles.Image}
        ></Image>
        <div className="px-6 space-y-1">
          <div className="py-3">
            <h2>Beginner's React Quiz</h2>
            <p className=" text-justify">
              Make the perfect use of the React JS Quiz and practise until you
              are satisfied with your skills and knowledge. You will get 1 point
              for each correct answer. At the end of the quiz, your total score
              will be displayed. The maximum score is 4 points.
            </p>
          </div>
          <div>
            <h2>This Quiz Includes</h2>
            <ul>
              <li className="flex flex-row">
                <i className="ri-checkbox-circle-line"></i>
                <p className="px-1">50% Passing Percentage</p>
              </li>
              <li className="flex flex-row">
                <i className="ri-questionnaire-line"></i>
                <p className="px-1">4 Questions</p>
              </li>
              <li className="flex flex-row">
                <i className="ri-hourglass-fill"></i>
                <p className="px-1">1 minute</p>
              </li>
              <li className="flex flex-row">
                <i className="ri-error-warning-line"></i>
                <p className="px-1">1 Attempt Only</p>
              </li>
            </ul>
          </div>
        </div>
        <Button onClick={openStartQuiz}>Take Quiz</Button>
      </div>
      {!!startQuiz && (
        <StartQuiz
          openStartQuiz={openStartQuiz}
          openStartTest={openStartTest}
          closeStartQuiz={closeStartQuiz}
        />
      )}
      {!!startTest && <TestPage onClick={openStartTest} />}
    </div>
  );
};

export default HomePage;
