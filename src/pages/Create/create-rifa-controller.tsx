import { CreateRifaView } from "./create-rifa-view";
import { useCreateRifa } from "./useCreateRifa";

export function CreateRifaController() {
  const props = useCreateRifa();

  return <CreateRifaView {...props} />;
}
