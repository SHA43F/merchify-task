import { useState } from "react";
import TestPage from "./TestPage";

const StartQuiz = () => {
  const [startTest, setStartTest] = useState<boolean>(false);
  const openStartTest = () => {
    setStartTest((startTest) => !startTest);
  };

  return (
    <>
      <button onClick={openStartTest}>Start the test...</button>
      {!!startTest && <TestPage />}
    </>
  );
};

export default StartQuiz;
