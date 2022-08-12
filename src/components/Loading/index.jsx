import { StyledLoading } from "./style.jsx";

export default function Loading({ isLoading }) {
  return isLoading ? <StyledLoading>Carregando...</StyledLoading> : null;
}
