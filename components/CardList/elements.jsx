import styled from "styled-components";

export const StyledCardListContainer = styled((props) => {
  return <div {...props} />;
})`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 1024px) {
    align-items: center;
  }
`;

export const StyledCardContainer = styled((props) => {
  return <div {...props} />;
})`
  width: 370px;
  display: flex;
  align-items: center;
  background-color: #f8f8f9;
  border-radius: 10px;
  padding: 0.8rem 3rem;
  gap: 1.5rem;

  :nth-child(2) {
    width: 400px;
  }

  :nth-child(3) {
    width: 430px;
  }

  &:hover {
    border: 3px solid #006efd;
    cursor: pointer;

    h1 {
      color: #006efd;
      text-decoration: underline;
    }
  }
`;

export const StyledCardInnerText = styled((props) => {
  return <div {...props} />;
})`
  font-family: Poppins;
  margin-left: 1rem;
`;

export const StyledCardTitle = styled((props) => {
  return <h1 {...props} />;
})`
  font-size: 22px;
  // &:hover{
  //   color:#006EFD;
  //   text-decoration:underline;
  // }
`;

export const StyledCardDesc = styled((props) => {
  return <p {...props} />;
})`
  margin-top: -16px;
  font-size: 18px;
`;
