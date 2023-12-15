import SectionHeader from '../SectionHeader';

const Journey = () => {
  return (
    <section
      id="journey"
      className="flex flex-col items-center gap-8 px-4 py-12 text-landingWhite"
    >
      <div className="text-center">
        <h2 className="mb-4 text-2xl">lorem ipsum</h2>
        <p className="mb-4">
          lorem ipsum dolor Ridiculus mattis morbi lacus fringilla eget eget
          tristique massa.{' '}
        </p>
        <div className="flex items-center justify-center gap-4">
          <img src="/helmet.png" alt="" />
          <img src="/bow.png" alt="" />
          <img src="/potion.png" alt="" />
        </div>
      </div>
      <img src="/skull.png" alt="" className="opacity-40" />
      <p className="w-[70%] self-start text-left text-2xl">
        Lorem ipsum dolor sit amet consectetur.
      </p>
      <p className="text-right text-xl">
        Lorem ipsum dolor sit amet consectetur. Ultrices ultrices lectus
        volutpat in orci facilisis nulla iaculis habitant.{' '}
      </p>
    </section>
  );
};

export default Journey;
