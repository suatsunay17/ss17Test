import Image from "next/image";
import {
  StyledTextContainer,
  StyledContainer,
  StyledTitle,
  StyledDescription,
  StyledImageContainer,
  StyledBottomContainer,
} from "./elements";
import { Card } from "~/collections";
import React from "react";
import { HeroProps } from "~pages";

export const Hero: React.FC<HeroProps> = ({
  image,
  title,
  description,
  ctaText,
  ...props
}: HeroProps) => {
  return (
    <StyledContainer {...props}>
      <StyledTextContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
      </StyledTextContainer>
      <StyledBottomContainer>
        <StyledImageContainer>
          <Image
            layout="responsive"
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
          />
        </StyledImageContainer>
        <Card ctaText={ctaText} />
      </StyledBottomContainer>
    </StyledContainer>
  );
};
