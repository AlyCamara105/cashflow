import { useDispatch } from "react-redux";

function CustomInput({
  type,
  placeholder,
  value,
  noDescription,
  setValueFunction,
}) {
  const dispatch = useDispatch();

  return (
    <div className="flex space-x-1">
      <input
        className="border text-xs max-w-[100px]"
        type={type}
        placeholder={placeholder}
        onBlur={(event) => {
          if (!noDescription && type === "number") {
            dispatch(setValueFunction(Number(event.target.value)));
            event.target.value = "";
          }
        }}
      />
      <p>{noDescription || (type === "number" ? `$${value}` : "")}</p>
    </div>
  );
}
export default CustomInput;
