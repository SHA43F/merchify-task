import Button from "@/pages/UI/Button";
import styles from "./Completed.module.css";

const Completed = ({ correct, QA, wrong, formatTime, time, onClick }: any) => {
  const percentile = (correct / QA.length) * 100;

  return (
    <div className={styles.OuterContainer}>
      <div className={styles.InnerContainer}>
        <h1 className="text-sky-500">React Quiz</h1>
        <div className={styles.DivContainer}>
          <h2>You scored</h2>
          <h1>{percentile}%</h1>
          <p className="text-xs sm:text-base">
            {percentile >= 50
              ? "You have good knowledge in react"
              : "You can do better"}
          </p>
        </div>
        <div className={styles.MiddleDiv}>
          <div className={styles.DivRepeated}>
            <p>Your score</p>
            <h1>
              {correct}/{QA.length}
            </h1>
          </div>
          <div className={styles.DivRepeated}>
            <p>Time Taken</p>
            <h1>{formatTime(time)}</h1>
          </div>
        </div>
        <div className={styles.AnswersDiv}>
          {wrong.length > 0 ? (
            <>
              <h2 className="text-[14px] sm:text-[20px] text-amber-500">
                Correct answers for the questions
              </h2>
              <ul>
                {wrong.map((element: any, index: number) => (
                  <li key={index}>
                    <div className="flex flex-row items-center">
                      <i className="ri-checkbox-blank-circle-fill"></i>
                      <p className={styles.ParagraphCustom}>
                        {element.question}
                      </p>
                    </div>
                    <p className={styles.ParagraphCorrect}>{element.correct}</p>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <h2 className="text-justify">
              You've answered correctly for all of the questions.
            </h2>
          )}
        </div>
        <Button onClick={onClick}>Reattempt Quiz</Button>
      </div>
    </div>
  );
};

export default Completed;
