import Entry from './Entry';

type Props = {
  explorations: Exploration[];
};

const List = ({ explorations }: Props) => {
  return (
    <div className="flex w-full flex-wrap gap-12 p-4 justify-center md:justify-start">
      {!explorations && <h2>No explorations found. Generate new one!</h2>}

      {explorations.map((exploration) => (
        <Entry
          key={exploration.id}
          id={exploration.id}
          name={exploration.name}
          image={exploration.image}
        />
      ))}
    </div>
  );
};

export default List;
