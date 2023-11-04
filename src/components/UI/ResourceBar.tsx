type Props = {
  currentResource: number;
  maxResource: number;
  percentage: number;
  label: string;
  bgColor: 'bg-red-700' | 'bg-yellow-500';
};

function ResourceBar({
  currentResource,
  maxResource,
  percentage,
  label,
  bgColor
}: Props) {
  const factor = !isNaN(percentage)
    ? percentage
    : (currentResource / maxResource) * 100;

  return (
    <>
      {label && `${label}:`}
      <div className='border border-solid border-black bg-gray-200 rounded-md w-full h-8 relative'>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>{`${factor.toFixed(
          1
        )}%`}</div>
        <div
          className={`py-1 transition-all h-full rounded ${bgColor}`}
          style={{
            width: `${factor}%`,
          }}
        ></div>
      </div>
    </>
  );
}

export default ResourceBar;
