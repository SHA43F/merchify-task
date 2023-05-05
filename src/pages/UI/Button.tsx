const Button = (props: any) => {
  return (
    <button
      onClick={props.onClick}
      className=" m-2 px-4 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-400"
    >
      {props.children}
    </button>
  );
};

export default Button;
