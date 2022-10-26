import { Player } from '@lottiefiles/react-lottie-player';
import styled from '@emotion/styled';

export const TileWrapper = styled.div`
  width: 25%;
  height: 25%;
  padding: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  position: relative;
  cursor: pointer;
  transform-style: preserve-3d;
  transform-origin: center right;
  transition: transform 1s;

  &.is-flipped {
    transform: translateX(-100%) rotateY(-180deg);
  }

  &.is-found {
    transform: translateX(-100%) rotateY(-540deg);
  }

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

export const PlayerWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  backface-visibility: hidden;
  &.answer {
    transform: rotateY(180deg);
  }
`;
