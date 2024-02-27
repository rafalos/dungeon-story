import { GiMantrap } from 'react-icons/gi';
import { GiWaterfall } from 'react-icons/gi';
import { GiChest } from 'react-icons/gi';

type Props = {
  isActive?: boolean;
  event: string;
};

function TimelineItem({ isActive, event }: Props) {
  const icons: {
    [key in typeof event]: JSX.Element;
  } = {
    trap: <GiMantrap />,
    well: <GiWaterfall />,
    treasure: <GiChest />,
  };

  return (
    <div
      className={`flex size-12 items-center justify-center bg-customBlack p-6 md:size-24 ${
        isActive ? 'border-customCaramel border-2' : ''
      }`}
    >
      <span className="text-3xl font-bold text-customWhite md:text-4xl">
        {icons[event]}
      </span>
    </div>
  );
}

export default TimelineItem;
