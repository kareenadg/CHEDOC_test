import styled from 'styled-components';

const StyledGrid = styled.div`
  display: grid;
  grid-template-rows: 15vh 1fr 25vh;
`;

const Grid = ({ children }) => {
  return <StyledGrid>{children}</StyledGrid>;
};

export default Grid;
