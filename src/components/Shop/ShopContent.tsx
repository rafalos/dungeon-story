import { buyItem } from '@/services/shop';
import Item from '../UI/Item';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import Loader from '../UI/Loader';
import { Equipment } from '@/types';

function ShopContent(props: { items: Equipment[] }) {
  const queryClient = useQueryClient();

  const { mutate, status } = useMutation({
    mutationFn: buyItem,
    onError: (e) => {
      console.log(e.response.data.message);
    },
    onSuccess: () => {
      queryClient.refetchQueries({});
    },
  });

  const itemBoughtHandler = async (id: string) => {
    mutate(id);
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
