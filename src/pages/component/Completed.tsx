const Completed = (props: any) => {
  return (
    <>
      <div>You scored: {(props.correct / props.QA.length) * 100}%</div>
      <div>
        You completed {props.correct}/{props.QA.length} in{" "}
        {props.formatTime(props.time)}
      </div>
    </>
  );
};

export default Completed;
