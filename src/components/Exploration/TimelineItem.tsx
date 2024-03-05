import { GiMantrap } from 'react-icons/gi';
import { GiWaterfall } from 'react-icons/gi';
import { GiChest } from 'react-icons/gi';
import { MdQuestionMark } from 'react-icons/md';

type Props = {
  isActive?: boolean;
  event: string;
  itemKnown: boolean;
};

function TimelineItem({ isActive, event, itemKnown }: Props) {
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
        isActive ? 'border-2 border-customCaramel' : ''
      }`}
    >
      <span className="text-3xl font-bold text-customWhite md:text-4xl">
        {itemKnown ? icons[event] : <MdQuestionMark />}
      </span>
    </div>
  );
}

export default TimelineItem;
