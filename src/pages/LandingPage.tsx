import Authentication from '@/components/UI/Authentication';

type Props = {};

const LandingPage = (props: Props) => {
  return (
    <div className='h-full w-full text-white flex justify-center items-center'>
      <Authentication />
    </div>
  );
};

export default LandingPage;
