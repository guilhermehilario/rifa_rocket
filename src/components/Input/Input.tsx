import { InputType } from "./types";
import { InputField } from "./styles";

export function Input(props: InputType) {
  return <InputField {...props} />;
}
