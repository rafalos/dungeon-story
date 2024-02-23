import React, { useState } from 'react';

type Props = {
  tabNames: string[];
};

const Tabs = ({tabNames}: Props) => {
  const [active, setActive] = useState();

  return <div>Tabs</div>;
};

export default Tabs;
