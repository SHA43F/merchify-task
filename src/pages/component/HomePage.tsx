import { useState } from "react";
import StartQuiz from "./StartQuizPortal";

const HomePage = () => {
  const [startQuiz, showStartQuiz] = useState<boolean>(false);
  const openStartQuiz = () => {
    showStartQuiz((startQuiz) => !startQuiz);
  };

  return (
    <>
      <button onClick={openStartQuiz}>Start Quiz</button>
      {!!startQuiz && <StartQuiz />}
    </>
  );
};

export default HomePage;
