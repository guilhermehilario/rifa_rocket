import { InputType } from "./types";
import { InputField } from "./styles";

export function Input(props: InputType) {
  return (
    <div>
      <label>{props.label}</label>
      <InputField {...props} />
    </div>
  );
}
