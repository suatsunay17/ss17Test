import { CardContainer } from "./elements";
import CardList from "../../components/CardList/CardList";

export const Card = ({ ctaText }) => {


  return (
    <CardContainer>
      <CardList data={ctaText}/>
    </CardContainer>
  );
};
