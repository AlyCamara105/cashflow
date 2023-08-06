import { useDispatch } from "react-redux";

function CustomInput({
  type,
  placeholder,
  value,
  noDescription,
  setValueFunction,
  form,
}) {
  const dispatch = useDispatch();

  function onFocusLost(event) {
    if (!noDescription || form) {
      let targetValue = event.target.value;

      if (type === "number") {
        targetValue = Number(targetValue);
      }

      dispatch(setValueFunction(targetValue));
      if (!form) {
        event.target.value = "";
      }
    }
  }

  function onKeyDown(event) {
    if (event.key === "Enter") {
      onFocusLost(event)
    }
  }

  return (
    <div className="flex space-x-1">
      <input
        className="max-w-[100px] border text-xs"
        type={type}
        placeholder={placeholder}
        onBlur={onFocusLost}
        onKeyDown={onKeyDown}
      />
      <p>{noDescription || (type === "number" ? `$${value}` : "")}</p>
    </div>
  );
}
export default CustomInput;
