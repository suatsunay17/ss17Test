import { CardContainer } from "./elements";
import { Card1 } from "../../components/Cards/Card1";
import { Card2 } from "../../components/Cards/Card2";
import { Card3 } from "../../components/Cards/Card3";

export const Card = ({ ctaText }) => {
  return (
    <CardContainer>
      <Card1 text={ctaText.cta1} />
      <Card2 text={ctaText.cta2} />
      <Card3 text={ctaText.cta3} />
    </CardContainer>
  );
};
