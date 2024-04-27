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

interface HeroProps {
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  title: string;
  description: string;
  ctaText: string;
  props: any;
}

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
