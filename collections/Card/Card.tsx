import React, { ReactElement } from "react";
import { CardContainer } from "./elements";
import { CardList } from "~/components";

type CardProps = {
  ctaText: {
    [key: string]: {
      img: string;
      title: string;
      description: string;
    };
  };
};

export const Card: React.FC<CardProps> = ({ ctaText }) => {
  return (
    <CardContainer>
      <CardList data={ctaText} />
    </CardContainer>
  );
};
