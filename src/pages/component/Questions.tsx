const Questions = (props) => {
  return (
    <>
      <div>{props.question}</div>
      {props.options.map((option, index) => (
        <div key={index}>
          <input
            type="radio"
            id={option}
            name="option"
            value={index}
            checked={index === props.selectOption ? true : false}
            onChange={props.changeOption}
          />
          <label htmlFor={option}>{option}</label>
        </div>
      ))}
    </>
  );
};

export default Questions;
