import styled from "styled-components";

const StyledSection = styled.section`
  display: flex;
  align-items: center;
  padding: 24px 32px;
  gap: 24px;
  background-color: ${(props) => props.background};
  color: white;
`;

export default StyledSection;
