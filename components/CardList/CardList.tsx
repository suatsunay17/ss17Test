import Image from "next/image";
import React from "react";
import {
  StyledCardContainer,
  StyledCardDesc,
  StyledCardInnerText,
  StyledCardListContainer,
  StyledCardTitle,
} from "./elements";

interface CardListProps {
  data: {
    [key: string]: {
      img: string;
      title: string;
      description: string;
    };
  };
}

export const CardList: React.FC<CardListProps> = ({ data }) => {
  return (
    <StyledCardListContainer>
      {Object.keys(data).map((item, i) => (
        <StyledCardContainer key={i}>
          <Image
            width={120}
            height={120}
            src={data[item].img}
            alt="blueprint"
          />
          <StyledCardInnerText>
            <StyledCardTitle>{data[item].title}</StyledCardTitle>
            <StyledCardDesc>{data[item].description}</StyledCardDesc>
          </StyledCardInnerText>
        </StyledCardContainer>
      ))}
    </StyledCardListContainer>
  );
};
