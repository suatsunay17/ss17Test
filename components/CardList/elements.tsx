import styled from "styled-components";

const StyledCardListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 1024px) {
    align-items: center;
  }
`;

const StyledCardContainer = styled.div`
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

const StyledCardInnerText = styled.div`
  font-family: Poppins;
  margin-left: 1rem;
`;

const StyledCardTitle = styled.h1`
  font-size: 22px;
`;

const StyledCardDesc = styled.p`
  margin-top: -16px;
  font-size: 18px;
`;

export {
  StyledCardListContainer,
  StyledCardContainer,
  StyledCardInnerText,
  StyledCardTitle,
  StyledCardDesc,
};
