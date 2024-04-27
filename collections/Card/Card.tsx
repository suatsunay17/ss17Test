import React from "react";
import { CardContainer } from "./elements";
import { CardList } from "~/components";

export const Card = ({ ctaText }: any) => {
  return (
    <CardContainer>
      <CardList data={ctaText} />
    </CardContainer>
  );
};
