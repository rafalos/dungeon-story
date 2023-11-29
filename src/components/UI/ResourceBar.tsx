type Props = {
  currentResource: number;
  maxResource: number;
  label: string;
  bgColor: 'bg-customRed' | 'bg-customYellow';
};

function ResourceBar({ currentResource, maxResource, label, bgColor }: Props) {
  const factor = (currentResource / maxResource) * 100;

  return (
    <>
      {label && `${label}:`}
      <div className='border-2 border-solid border-black bg-gray-300 w-full h-8 relative'>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-lg text-gray-900'>{`${factor.toFixed(
          1
        )}%`}</div>
        <div
          className={`py-1 transition-all h-full ${bgColor}`}
          style={{
            width: `${factor}%`,
          }}
        ></div>
      </div>
    </>
  );
}

export default ResourceBar;
