type Props = {
  currentResource: number;
  maxResource: number;
  label?: string;
  bgColor: 'bg-customRed' | 'bg-customYellow';
  className?: string;
};

function ResourceBar({ currentResource, maxResource, bgColor }: Props) {
  const factor = (currentResource / maxResource) * 100;

  return (
    <div className="relative h-4 w-full border-none bg-customWhite">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-sm font-bold text-customBlack">{`${factor.toFixed(
        0
      )}%`}</div>
      <div
        className={`h-full py-2 transition-all ${bgColor}`}
        style={{
          width: `${factor}%`,
        }}
      ></div>
    </div>
  );
}

export default ResourceBar;
