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

  return (
    <div className="flex space-x-1">
      <input
        className="max-w-[100px] border text-xs"
        type={type}
        placeholder={placeholder}
        onBlur={(event) => {
          if (!noDescription || form) {
            if (type === "number") {
              dispatch(setValueFunction(Number(event.target.value)));
              if (!form) {
                event.target.value = "";
              }
            } else if (type === "text") {
              dispatch(setValueFunction(event.target.value));
              if (!form) {
                event.target.value = "";
              }
            }
          }
        }}
      />
      <p>{noDescription || (type === "number" ? `$${value}` : "")}</p>
    </div>
  );
}
export default CustomInput;
