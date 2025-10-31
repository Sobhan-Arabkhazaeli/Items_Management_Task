import type { FC } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

interface SearchInputProps {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const SearchInput: FC<SearchInputProps> = ({ setSearch }) => {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex items-center w-full sm:w-80 rounded-2xl px-4 py-3.5 border border-border bg-surface/60  backdrop-blur-sm transition-all duration-300 group hover:scale-[1.02]"
    >
      <input
        type="text"
        placeholder="Search product..."
        aria-label="Search by title"
        onChange={(e) => setSearch(e.target.value)}
        className="w-full bg-transparent outline-none pl-2 text-text  placeholder-text-secondary  font-medium focus:placeholder-transparent transition-all duration-300"
      />
      <FaMagnifyingGlass className="w-5 h-5 text-text-secondary  transition-colors duration-300 group-focus-within:text-primary" />
    </form>
  );
};

export default SearchInput;
