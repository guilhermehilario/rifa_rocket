import { Container } from "./styles";
import { ButtonType } from "./types";

export function Button(props: ButtonType) {
  return <Container {...props}> {props.label} </Container>;
}
