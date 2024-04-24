import Image from "next/image";
import {
  StyledCardContainer,
  StyledCardDesc,
  StyledCardInnerText,
  StyledCardListContainer,
  StyledCardTitle,
} from "./elements";

export default function CardList({ data }) {
  return (
    <StyledCardListContainer>
      {Object.keys(data).map((item, i) => (
        <StyledCardContainer key={i}>
          <Image width="120" height="120" src={data[item].img} alt="blueprint" />
          <StyledCardInnerText>
            <StyledCardTitle>{data[item].title}</StyledCardTitle>
            <StyledCardDesc>{data[item].description}</StyledCardDesc>
          </StyledCardInnerText>
        </StyledCardContainer>
      ))}
    </StyledCardListContainer>
  );
}
