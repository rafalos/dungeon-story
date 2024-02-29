import { buyItem } from '@/services/shop';
import Item from '../UI/Item';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import Loader from '../UI/Loader';
import { Equipment } from '@/types';
import { useAppDispatch } from '@/store';
import { EquipmentSchema } from '@/schemas';
import { itemBought } from '@/store/player-inventory-slice';
import { AxiosError } from 'axios';
import { useNotify } from '@/providers/NotificationProvider';
import Card from '../UI/Card';
import { GiTwoCoins } from 'react-icons/gi';

function ShopContent(props: { items: Equipment[] }) {
  const dispatch = useAppDispatch();
  const notify = useNotify();

  const { mutate, status } = useMutation({
    mutationFn: buyItem,
    onError: (error) => {
      if (error instanceof AxiosError) {
        notify(error.response?.data.message);
      }
    },
    onSuccess: ({ data }) => {
      const { item } = data;
      const parsedItem = EquipmentSchema.parse(item);

      dispatch(itemBought(parsedItem));
    },
  });

  const itemBoughtHandler = async (item: Equipment) => {
    mutate(item.id);
  };

  const shopElements = props.items.map((shopElement) => (
    <div
      key={shopElement.id}
      className="flex flex-col items-center justify-center gap-2"
    >
      <Item
        slot={shopElement.slot}
        stackable={false}
        id={shopElement.id}
        item={shopElement}
        price={shopElement.buyPrice}
        onItemClicked={itemBoughtHandler}
      />
      <span className="flex gap-1 text-sm text-customYellow">
        <GiTwoCoins /> {shopElement.buyPrice}
      </span>
    </div>
  ));

  if (status === 'pending') {
    return <Loader />;
  }

  return (
    <Card title="Merchant">
      <div className="flex">{shopElements}</div>
    </Card>
  );
}

export default ShopContent;
