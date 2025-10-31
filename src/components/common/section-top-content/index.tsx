import type { FC, ReactNode } from "react";

interface SectionTopContentProps {
  children: ReactNode;
}

const SectionTopContent: FC<SectionTopContentProps> = ({ children }) => {
  return (
    <div className="flex flex-wrap md:justify-between justify-center items-center gap-4 rounded-2xl p-6 bg-surface/50 backdrop-blur-sm  transition-all duration-500 shadow-md border border-border">
      {children}
    </div>
  );
};

export default SectionTopContent;
