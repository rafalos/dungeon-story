import { useSpritesheet } from '@/hooks/useSpritesheet';

type Props = {
  spriteSize: number;
  spriteCount: number;
  spritesheetURL: string;
};

const Sprite = ({ spriteCount, spriteSize, spritesheetURL }: Props) => {
  const { currentPosition } = useSpritesheet(spriteSize, spriteCount);

  return (
    <div className="text-white">
      <div
        style={{
          background: `url(${spritesheetURL}) ${currentPosition}px 0`,
          width: `${spriteSize}px`,
          height: `${spriteSize}px`,
          transform: 'scale(4)'
        }}
      ></div>
    </div>
  );
};

export default Sprite;
