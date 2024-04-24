import { CardContainer } from "./elements";
import { CardList } from "~/components";

export const Card = ({ ctaText }) => {
  return (
    <CardContainer>
      <CardList data={ctaText} />
    </CardContainer>
  );
};
