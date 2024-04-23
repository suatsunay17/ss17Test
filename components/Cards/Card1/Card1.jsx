import {
  HighlightWord,
  StyledCard1Container,
  StyledCard1Desc,
  StyledCard1InnerText,
  StyledCard1Title,
} from "./elements";

function renderDescription(description) {
  const words = description.split(" ");
  return (
    <StyledCard1Desc>
      {words.map((word, index) => {
        // Add one to index since indexing starts at 0
        if (index === 1 || index === 5 || index === 2|| index === 3|| index === 4) {
          return <HighlightWord key={index}>{word} </HighlightWord>;
        }
        return word + " ";
      })}
    </StyledCard1Desc>
  );
}

export const Card1 = ({ text }) => {
  return (
    <StyledCard1Container>
      <img
        width="51"
        height="51"
        src="https://img.icons8.com/badges/48/blueprint.png"
        alt="blueprint"
      />
      <StyledCard1InnerText>
        <StyledCard1Title>{text.title}</StyledCard1Title>
        {renderDescription(text.description)}
      </StyledCard1InnerText>
    </StyledCard1Container>
  );
};
