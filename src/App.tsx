import { ThemeProvider } from "styled-components";
import { darkTheme } from "./theme";
import "./styles/reset.css";
import { Container } from "./styles/app";

export function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <h1> Rifa Rocket </h1>
      </Container>
    </ThemeProvider>
  );
}
