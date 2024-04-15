import Item from '../UI/Item';
import Button from '../UI/Button';
import { Link } from 'react-router-dom';
import Typer from '../UI/Typer';
import Card from '../UI/Card';
import { Equipment } from '@/types';

type Props = {
  ending: string;
  totalExperienceGained: number;
  totalItemsFound: Equipment[];
};

function ExplorationSummary({
  ending,
  totalExperienceGained,
  totalItemsFound,
}: Props) {
  const foundItems = totalItemsFound.map((item) => (
    <Item key={item.id} item={item} onItemClicked={() => null} />
  ));
  return (
    <Card>
      <div className="mb-4 text-2xl italic">
        <Typer text={ending} delay={20} />
      </div>
      <div className="flex flex-col items-center gap-8">
        <p>
          During your expedition you have gained {totalExperienceGained} total
          experience.
        </p>
        <span>Found: {totalItemsFound.length > 0 ? foundItems : 'No items'}</span>
        <Link to="..">
          <Button>Leave exploration</Button>
        </Link>
      </div>
    </Card>
  );
}

export default ExplorationSummary;
