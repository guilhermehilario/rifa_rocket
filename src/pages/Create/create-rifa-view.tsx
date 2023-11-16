import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Container, Title, Form } from "./styles";
import { CreateRifaViewProps } from "./types";

export function CreateRifaView(props: CreateRifaViewProps) {
  return (
    <>
      <Container>
        <Title>{props.title}</Title>
        <Form>
          <Input label="Nome da rifa" name="nome-da-rifa:" placeholder="Digite o nome da rifa..." />
          <Input label="Preco (por numero):" name="preco" placeholder="R$ 10,00" type="number" />
          <Input
            label="Quantidade de numero:"
            name="quantidade-de-numero"
            placeholder="10"
            type="10"
          />
          <Button>Criar</Button>
        </Form>
      </Container>
    </>
  );
}
