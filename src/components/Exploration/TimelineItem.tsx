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
      className={`size-12 m-4 flex items-center justify-center bg-customBlack p-6 ${
        isActive ? 'border-2 border-customYellow' : ''
      }`}
    >
      <span className="text-2xl font-bold">{icons[event]}</span>
    </div>
  );
}

export default TimelineItem;
