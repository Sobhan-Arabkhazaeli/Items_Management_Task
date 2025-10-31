import type { FC } from "react";

interface TitleSectionProps {
  title: string;
  number: number;
}

const TitleSection: FC<TitleSectionProps> = ({ title, number }) => {
  return (
    <h1 className="flex items-center gap-2 text-xl font-semibold text-text transition-all duration-300">
      <span>{title}</span>
      <span className="text-primary font-bold">{number}</span>
    </h1>
  );
};

export default TitleSection;
