import React from 'react';

type Props = {
  title: string;
};

const SectionHeader = ({ title }: Props) => {
  return (
    <div className="flex h-16 w-full items-center justify-center bg-gradient-to-b from-[rgba(43_33_18/0.50)_-12.66%] to-[rgb(43_33_18/0.00)_100%] py-8 md:text-2xl">
      <h2>{title}</h2>
    </div>
  );
};

export default SectionHeader;

// background: var(--gradient-header-section, linear-gradient(180deg, rgba(43, 33, 18, 0.50) -12.66%, rgba(43, 33, 18, 0.00) 100%));
