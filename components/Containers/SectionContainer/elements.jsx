import styled from "styled-components";

export const StyledSectionContainer = styled(
  ({ topMargin = 0, bottomMargin = 0, ...props }) => <div {...props} />
)`
  display: flex;
  max-width: 1920px;
  // width: 100%;
  overflow: hidden;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  margin-top: ${({ topMargin }) => topMargin}rem;
  margin-bottom: ${({ bottomMargin }) => bottomMargin}rem;
`;

export const StyledCardContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
