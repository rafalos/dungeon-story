import Entry from './Entry';

type Props = {
  explorations: Exploration[];
};

const List = ({ explorations }: Props) => {
  return (
    <div className="flex w-full flex-wrap justify-center gap-12 overflow-auto p-4">
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
