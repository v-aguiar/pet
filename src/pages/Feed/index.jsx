import Footer from "../../components/Footer/index.jsx";
import Header from "../../components/Header/index.jsx";

import { StyledFeed } from "./style.jsx";

export default function Feed() {
  return (
    <StyledFeed>
      <Header>Header</Header>
      <div>Pets nearby</div>
      <div>Organizations nearby</div>
      <Footer>Footer</Footer>
    </StyledFeed>
  );
}
