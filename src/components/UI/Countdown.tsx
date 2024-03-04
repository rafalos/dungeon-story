import { useEffect, useState } from 'react';

type Props = {
  till: string;
};

const Countdown = ({ till }: Props) => {
  const [timeleft, setTimeleft] = useState<number>(0);

  const parsedTimer = new Date(timeleft * 1000).toISOString().slice(11, 19);

  useEffect(() => {
    setTimeleft(
      Math.round(
        Math.abs(new Date().valueOf() - new Date(till).valueOf()) / 1000
      )
    );

    const intervalID = setInterval(() => {
      setTimeleft((prev) => prev - 1);
    }, 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, [till]);

  return <div>{parsedTimer}</div>;
};

export default Countdown;
