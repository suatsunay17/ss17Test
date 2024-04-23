import {
  HighlightWord,
  StyledCard2Container,
  StyledCard2Desc,
  StyledCard2InnerText,
  StyledCard2Title,
} from "./elements";

function renderDescription(description) {
  const words = description.split(" ");
  return (
    <StyledCard2Desc>
      {words.map((word, index) => {
        // Add one to index since indexing starts at 0
        if (index === 5 || index === 4) {
          return <HighlightWord key={index}>{word} </HighlightWord>;
        }
        return word + " ";
      })}
    </StyledCard2Desc>
  );
}

export const Card2 = ({ text }) => {
  return (
    <StyledCard2Container>
      <img
        width="50"
        height="50"
        src="https://img.icons8.com/dotty/80/view-file.png"
        alt="view-file"
      />
      <StyledCard2InnerText>
        <StyledCard2Title>{text.title}</StyledCard2Title>
        {renderDescription(text.description)}
      </StyledCard2InnerText>
    </StyledCard2Container>
  );
};
