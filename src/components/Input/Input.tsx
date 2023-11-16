import { InputProps } from "./types";
import { Container, InputField } from "./styles";

export function Input(props: InputProps) {
  return (
    <Container>
      <label>{props.label}</label>
      <InputField {...props} />
    </Container>
  );
}
