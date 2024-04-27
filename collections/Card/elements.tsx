import styled, { StyledComponent } from "styled-components";
import React from "react";

interface CardContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

const CardContainer: StyledComponent<"div", any, CardContainerProps, never> = styled.div<CardContainerProps>`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export { CardContainer };