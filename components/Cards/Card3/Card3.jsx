import {
  HighlightWord,
  StyledCard3Container,
  StyledCard3Desc,
  StyledCard3InnerText,
  StyledCard3Title,
} from "./elements";

function renderDescription(description) {
  const words = description.split(" ");
  return (
    <StyledCard3Desc>
      {words.map((word, index) => {
        // Add one to index since indexing starts at 0
        if (index === 1 || index === 2) {
          return <HighlightWord key={index}>{word} </HighlightWord>;
        }
        return word + " ";
      })}
    </StyledCard3Desc>
  );
}

export const Card3 = ({ text }) => {
  return (
    <StyledCard3Container>
      <img
        width="50"
        height="50"
        src="https://img.icons8.com/dotty/80/meeting-room.png"
        alt="meeting-room"
      />
      <StyledCard3InnerText>
        <StyledCard3Title>{text.title}</StyledCard3Title>
        {renderDescription(text.description)}
      </StyledCard3InnerText>
    </StyledCard3Container>
  );
};
