import styled from "styled-components";
import {
  SectionContainer,
  SectionBigHeading,
  SectionSubheading,
} from "~/components";

export const StyledContainer = styled(({ height, ...props }) => (
  <SectionContainer {...props} />
))`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("img/background.png");
  padding: 5rem 0;

  @media (max-width: 1024px) {
    padding: 1rem 3rem;
    align-items: center;
  }
`;

export const StyledTitle = styled((props) => <SectionBigHeading {...props} />)`
  margin: 0;
  color: black;

  @media (max-width: 680px) {
    font-size: 2rem;
  }

  @media (max-width: 470px) {
    font-size: 1.7rem;
    text-align: center;
  }
`;

export const StyledDescription = styled((props) => (
  <SectionSubheading {...props} />
))`
  margin: 0 0 2rem;
  text-align: center;
  font-size: 24px;

  @media (max-width: 680px) {
    font-size: 1.3rem;
  }

  @media (max-width: 470px) {
    font-size: 1.2rem;
    text-align: center;
  }
`;

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
  color: black;
  font-family: sans-serif;
`;

export const StyledImageContainer = styled(({ ...props }) => (
  <div {...props} />
))`
  max-width: 360px;
  width: 360px;

  @media (max-width: 1024px) {
    margin-top: 3rem;
  }

  @media (max-width: 500px) {
    width: 300px;
    max-width: 300px;
  }
`;

export const StyledBottomContainer = styled(({ ...props }) => (
  <div {...props} />
))`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5rem;

  @media (max-width: 1024px) {
    flex-direction: column;
    margin-bottom: 2rem;
  }
`;
