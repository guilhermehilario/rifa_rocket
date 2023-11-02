import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Container } from "./styles";
import { CreateRifaViewProps } from "./types";

export function CreateRifaView(props: CreateRifaViewProps) {
  return (
    <Container>
      <h1>Rifa Rockt</h1>
      <Input label="Nome da rifa" placeholder="Digite o nome da rifa..." />
      <Button>Criar</Button>
    </Container>
  );
}
