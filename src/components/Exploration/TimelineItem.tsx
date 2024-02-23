import { GiMantrap } from 'react-icons/gi';

type Props = {
  isActive?: boolean;
  event: string;
};

function TimelineItem({ isActive, event }: Props) {
  const icons: {
    [key in typeof event]: JSX.Element;
  } = {
    trap: <GiMantrap />,
  };

  return (
    <div
      className={`flex items-center justify-center bg-customBlack p-2 ${
        isActive ? 'border border-customYellow' : ''
      }`}
    >
      <span className="text-2xl">{icons[event]}</span>
    </div>
  );
}

export default TimelineItem;
