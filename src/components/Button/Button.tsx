import { Container } from "./styles";
import { ButtonProps } from "./types";

export function Button(props: ButtonProps) {
  return <Container {...props}> {props.children} </Container>;
}
