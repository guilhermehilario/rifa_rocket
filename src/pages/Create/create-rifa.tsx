import { CreateRifaView } from "./create-rifa-view";
import { useCreateRifaViewModel } from "./useCreateRifaViewModel";

export function CreateRifa() {
  const props = useCreateRifaViewModel();

  return <CreateRifaView title="Crie sua rifa" {...props} />;
}
