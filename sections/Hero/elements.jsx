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

  @media (max-width: 800px) {
    font-size: 40px;
  }

  @media (max-width: 690px) {
    font-size: 30px;
  }
  @media (max-width: 550px) {
    font-size: 26px;
  }

  @media (max-width: 500px) {
    font-size: 22px;
    text-align: center;
  }


  
`;

export const StyledDescription = styled((props) => (
  <SectionSubheading {...props} />
))`
  margin: 0 0 2rem;
  text-align: center;
  font-size: 24px;

  @media (max-width: 800px) {
    font-size: 20px;
  }

  @media (max-width: 680px) {
    font-size: 1.1rem;
  }

  @media (max-width: 550px) {
    font-size: 16px;
  }

  @media (max-width: 500px) {
    font-size: 14px;
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
  width: 360px;

  @media (max-width: 1024px) {
    margin-top: 3rem;
  }

  @media (max-width: 550px) {
    width: 300px;
  }

  @media (max-width: 500px) {
    width: 260px;
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
