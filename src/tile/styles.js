import { Player } from '@lottiefiles/react-lottie-player';
import styled from '@emotion/styled';

export const TileWrapper = styled.div`
  width: 25vw;
  height: 25vw;
  padding: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  position: relative;
  .lf-player-container {
    height: 100%;
    width: 100%;
    position: relative;
  }
`;

export const StyledPlayer = styled(Player)`
  height: 100%;
  width: 100%;
`;
