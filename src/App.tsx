import { ThemeProvider } from "styled-components";
import { darkTheme } from "./theme";
import "./styles/reset.css";
import { Container, Title } from "./styles/app";
import { CreateRifa } from "./pages/Create/create-rifa";

export function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <Title>Rifa Rockt</Title>
        <CreateRifa />
      </Container>
    </ThemeProvider>
  );
}
