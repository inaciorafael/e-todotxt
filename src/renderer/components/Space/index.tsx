import styled from 'styled-components';

interface SpaceProps {
  vertical: number;
  horizontal: number;
}

const Space = styled.div<SpaceProps>`
  ${({ vertical }) => (vertical ? `height:${vertical}px;` : '')}
  ${({ horizontal }) => (horizontal ? `width:${horizontal}px;` : '')}
`;

export default Space;
