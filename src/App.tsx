import { ThemeProvider } from "styled-components";
import { darkTheme } from "./theme";
import "./styles/reset.css";
import { Container } from "./styles/app";
import { CreateRifaView } from "./pages/Create/create-rifa-view";

export function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <h1> Rifa Rocket </h1>
        <CreateRifaView />
      </Container>
    </ThemeProvider>
  );
}
