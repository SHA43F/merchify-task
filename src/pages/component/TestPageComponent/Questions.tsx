const Questions = (props: any) => {
  return (
    <div className="p-4">
      <h2>{props.question}</h2>
      {props.options.map((option: string, index: number) => (
        <div
          key={index}
          onClick={props.changeOption.bind(null, index)}
          className={
            index !== props.selectOption
              ? "w-full flex flex-row justify-between items-center p-4 border border-solid rounded-lg my-4"
              : "w-full flex flex-row justify-between items-center p-4 border border-solid border-blue-600 rounded-lg my-4"
          }
        >
          <label htmlFor={option} className="text-base sm:text-lg text-justify">
            {option}
          </label>
          <input
            type="radio"
            id={option}
            name="option"
            value={index}
            checked={index === props.selectOption ? true : false}
            onChange={props.changeOption.bind(null, index)}
            className=" w-5 h-5"
          />
        </div>
      ))}
    </div>
  );
};

export default Questions;
