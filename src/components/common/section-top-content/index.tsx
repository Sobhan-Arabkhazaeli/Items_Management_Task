import type { FC, ReactNode } from "react";

interface SectionTopContentProps {
  children: ReactNode;
}

const SectionTopContent: FC<SectionTopContentProps> = ({ children }) => {
  return (
    <div
      className="
        flex flex-wrap md:justify-between justify-center items-center 
        gap-4 rounded-xl 
        
         transition-all duration-300
      "
    >
      {children}
    </div>
  );
};

export default SectionTopContent;
