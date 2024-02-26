import { GiMantrap } from 'react-icons/gi';
import { GiWaterfall } from 'react-icons/gi';

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
  };

  return (
    <div
      className={`m-4 flex size-12 md:size-24 items-center justify-center bg-customBlack p-6 ${
        isActive ? 'border-2 border-customRed' : ''
      }`}
    >
      <span className="text-2xl md:text-4xl font-bold text-customWhite">
        {icons[event]}
      </span>
    </div>
  );
}

export default TimelineItem;
