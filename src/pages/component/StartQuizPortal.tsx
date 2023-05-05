import styles from "./StartQuizPortal.module.css";
import Button from "../UI/Button";

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
            <li className="flex flex-row items-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="32"
                height="32"
              >
                <path
                  d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM13 12V7H11V14H17V12H13Z"
                  fill="rgba(70,146,221,1)"
                ></path>
              </svg>
              <span className="px-2">
                <h3 className=" text-xs sm:text-base">1 minute</h3>
                <p className=" text-xs sm:text-base">
                  Keep in mind that it's a time bound quiz
                </p>
              </span>
            </li>
            <li className="flex flex-row items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="32"
                height="32"
              >
                <path
                  d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 15V17H13V15H11ZM13 13.3551C14.4457 12.9248 15.5 11.5855 15.5 10C15.5 8.067 13.933 6.5 12 6.5C10.302 6.5 8.88637 7.70919 8.56731 9.31346L10.5288 9.70577C10.6656 9.01823 11.2723 8.5 12 8.5C12.8284 8.5 13.5 9.17157 13.5 10C13.5 10.8284 12.8284 11.5 12 11.5C11.4477 11.5 11 11.9477 11 12.5V14H13V13.3551Z"
                  fill="rgba(70,146,221,1)"
                ></path>
              </svg>
              <span className="px-2">
                <h3 className=" text-xs sm:text-base">4 Questions</h3>
                <p className=" text-xs sm:text-base">
                  We believe that you will ace it
                </p>
              </span>
            </li>
            <li className="flex flex-row items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="32"
                height="32"
              >
                <path
                  d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z"
                  fill="rgba(70,146,221,1)"
                ></path>
              </svg>
              <span className="px-2">
                <h3 className=" text-xs sm:text-base">50% Passing Criteria</h3>
                <p className=" text-xs sm:text-base">
                  All the best see you on the other side
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
