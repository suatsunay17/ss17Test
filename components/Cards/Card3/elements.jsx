import styled from "styled-components";

export const StyledCard3Container = styled((props) => {
  return <div {...props} />;
})`
  width: 420px;
  display: flex;
  align-items: center;
  background-color: #f1f1f1;
  border-radius: 10px;
  padding: 0.8rem 3rem;
  gap: 1.5rem;

  &:hover {
    border: 3px solid #006efd;
    cursor: pointer;

    h1 {
      color: #006efd;
    }
  }
`;

export const HighlightWord = styled.span`
  font-weight: bold;
`;

export const StyledCard3InnerText = styled((props) => {
  return <div {...props} />;
})`
  font-family: Poppins;
  margin-left: 1rem;
`;

export const StyledCard3Title = styled((props) => {
  return <h1 {...props} />;
})`
  font-size: 22px;
`;

export const StyledCard3Desc = styled((props) => {
  return <p {...props} />;
})`
  margin-top: -16px;
  font-size: 17px;
`;
