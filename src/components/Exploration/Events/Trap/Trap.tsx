import Button from '@/components/UI/Button';

type Props = {
  onEventFinished: () => void;
};

function Trap({ onEventFinished }: Props) {
  return (
    <>
      You have fallen into a trap. This results in losing 10% hp!{' '}
      <Button onClick={onEventFinished}>Done</Button>
    </>
  );
}

export default Trap;
