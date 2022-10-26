import { StyledPlayer, TileWrapper } from './styles';

export const Tile = ({ asset }) => {
  return (
    <TileWrapper>
      <StyledPlayer autoplay loop src={asset} />
    </TileWrapper>
  );
};
