import { ThemeProvider } from "styled-components";
import { darkTheme } from "./theme";
import "./styles/reset.css";
import { Container, Title } from "./styles/app";
import { CreateRifaView } from "./pages/Create/create-rifa-view";

export function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <Title>Rifa Rockt</Title>
        <CreateRifaView />
      </Container>
    </ThemeProvider>
  );
}
