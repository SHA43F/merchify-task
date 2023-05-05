import styles from "./StartQuizPortal.module.css";
import Button from "../UI/Button";
import TimeFill from "../UI/TimeFill";
import Check from "../UI/Check";
import Question from "../UI/Question";

const StartQuiz = (props: any) => {
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="100"
      className={styles.MainContainer}
    >
      <div
        data-aos="zoom-in"
        data-aos-duration="400"
        className={styles.InnerContainer}
      >
        <span className="w-full">
          <i
            className="ri-close-circle-line float-right text-xl px-4 hover:text-zinc-500"
            onClick={props.closeStartQuiz}
          ></i>
        </span>
        <div>
          <h2 className=" text-base sm:text-xl my-2">Quiz Rules</h2>
          <ul className="flex flex-col space-y-4 justify-evenly">
            <li className={styles.Li}>
              <TimeFill />
              <span className="px-2">
                <h3 className=" text-xs sm:text-base">1 minute</h3>
                <p className=" text-xs sm:text-base">
                  Keep in mind that it's a time bound quiz.
                </p>
              </span>
            </li>
            <li className={styles.Li}>
              <Question />
              <span className="px-2">
                <h3 className=" text-xs sm:text-base">4 Questions</h3>
                <p className=" text-xs sm:text-base">
                  We believe that you will ace it.
                </p>
              </span>
            </li>
            <li className={styles.Li}>
              <Check />
              <span className="px-2">
                <h3 className=" text-xs sm:text-base">50% Passing Criteria</h3>
                <p className=" text-xs sm:text-base">
                  All the best see you on the other side.
                </p>
              </span>
            </li>
          </ul>
        </div>
        <Button onClick={props.openStartTest}>Start</Button>
      </div>
    </div>
  );
};

export default StartQuiz;
