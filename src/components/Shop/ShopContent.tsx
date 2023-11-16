import { buyItem } from '@/services/shop';
import Item from '../UI/Item';
import { useMutation, useQueryClient } from '@tanstack/react-query';

function ShopContent(props) {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: buyItem,
    onSuccess: () => {
      queryClient.refetchQueries({});
    },
  });

  const itemBoughtHandler = async (id: string) => {
    mutation.mutate(id);
  };

  const shopElements = props.items.map((shopElement) => (
    <Item
      slot={shopElement.slot}
      stackable={false}
      key={shopElement._id}
      id={shopElement._id}
      item={shopElement}
      price={shopElement.price}
      onItemClicked={itemBoughtHandler}
    />
  ));

  return <div>{shopElements}</div>;
}

export default ShopContent;
