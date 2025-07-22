import { MagnifyingGlass } from "phosphor-react";
import { SeachFormContainer } from "./style";

export function SeachForm() {
  return (
    <SeachFormContainer>
      <input type="text" placeholder="Busque pro transações" />

      <button type="submit">
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SeachFormContainer>
  );
}
