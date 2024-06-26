import React, { useState, useMemo } from 'react';
import Button from './Button';

type TabElement = {
  title: string;
  component: JSX.Element;
};

type Props = {
  elements: TabElement[];
};

const Tabbed = ({ elements }: Props) => {
  const [active, setActive] = useState(elements[0].title);
  const tabNames = elements.map((element) => element.title);

  const handleChangeTab = (tab: string) => {
    setActive(tab);
  };

  const tabToRender = elements.filter((element) => element.title === active)[0]
    .component;

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="my-2 flex divide-x divide-customBlack shadow-sm">
        {tabNames.map((tabName, index) => (
          <Button
            className={`${index === 0 ? 'rounded-l-lg' : null} ${
              index === tabNames.length - 1 ? 'rounded-r-lg' : null
            } ${active === tabName ? 'bg-customRed/80' : null}`}
            onClick={() => handleChangeTab(tabName)}
            key={tabName}
            variant={'tab'}
          >
            {tabName}
          </Button>
        ))}
      </div>

      <div>{tabToRender}</div>
    </div>
  );
};

export default Tabbed;
