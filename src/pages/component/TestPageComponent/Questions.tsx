const Questions = ({ question, options, changeOption, selectOption }: any) => {
  return (
    <div className="p-4">
      <h2>{question}</h2>
      {options.map((option: string, index: number) => (
        <div
          key={index}
          onClick={changeOption.bind(null, index)}
          className={
            index !== selectOption
              ? "w-full flex flex-row justify-between items-center p-4 border border-solid rounded-lg my-4 bg-white shadow-md"
              : "w-full flex flex-row justify-between items-center p-4 border border-solid border-blue-600 bg-white shadow-md rounded-lg my-4"
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
            checked={index === selectOption ? true : false}
            onChange={() => changeOption(index)}
            className=" w-5 h-5"
          />
        </div>
      ))}
    </div>
  );
};

export default Questions;
