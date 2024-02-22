type Props = {
  currentResource: number;
  maxResource: number;
  label: string;
  bgColor: 'bg-customRed' | 'bg-customYellow';
  className?: string;
};

function ResourceBar({ currentResource, maxResource, label, bgColor }: Props) {
  const factor = (currentResource / maxResource) * 100;

  return (
    <>
      {label && `${label}:`}
      <div className="relative h-8 w-full border-2 border-solid border-black bg-gray-300">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-lg text-gray-900">{`${factor.toFixed(
          1
        )}%`}</div>
        <div
          className={`h-full py-1 transition-all ${bgColor}`}
          style={{
            width: `50%`,
          }}
        ></div>
      </div>
    </>
  );
}

export default ResourceBar;
