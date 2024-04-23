import styled from "styled-components";

export const CardContainer = styled((props) => {
  return <div {...props} />;
})`
display:flex;
  flex-direction: column;
  gap: 2rem;
`;