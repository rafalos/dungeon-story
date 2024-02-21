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

function ShopContent(props: { items: Equipment[] }) {
  const queryClient = useQueryClient();
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
      queryClient.refetchQueries({});
    },
  });

  const itemBoughtHandler = async (item: Equipment) => {
    mutate(item.id);
  };

  const shopElements = props.items.map((shopElement) => (
    <Item
      slot={shopElement.slot}
      stackable={false}
      key={shopElement.id}
      id={shopElement.id}
      item={shopElement}
      price={shopElement.buyPrice}
      onItemClicked={itemBoughtHandler}
    />
  ));

  if (status === 'pending') {
    return <Loader />;
  }

  return <div>{shopElements}</div>;
}

export default ShopContent;
