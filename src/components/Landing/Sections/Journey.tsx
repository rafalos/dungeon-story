import SectionHeader from '../SectionHeader';

const Journey = () => {
  return (
    <section className='flex flex-col gap-8 items-center text-landingWhite py-12 px-4'>
      <div className='text-center'>
        <h2 className='text-2xl mb-4'>lorem ipsum</h2>
        <p className='mb-4'>
          lorem ipsum dolor Ridiculus mattis morbi lacus fringilla eget eget
          tristique massa.{' '}
        </p>
        <div className='flex justify-center items-center gap-4'>
          <img src='/helmet.png' alt='' />
          <img src='/bow.png' alt='' />
          <img src='/potion.png' alt='' />
        </div>
      </div>
      <img src="/skull.png" alt="" />
      <p className='text-left w-[70%] text-2xl self-start'>
        Lorem ipsum dolor sit amet consectetur.
      </p>
      <p className='text-right text-xl'>
        Lorem ipsum dolor sit amet consectetur. Ultrices ultrices lectus
        volutpat in orci facilisis nulla iaculis habitant.{' '}
      </p>
    </section>
  );
};

export default Journey;
