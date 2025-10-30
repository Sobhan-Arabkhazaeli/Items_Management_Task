import type { FC } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

interface SearchInputProps {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

/**
 * @component SearchInput
 */
const SearchInput: FC<SearchInputProps> = ({ setSearch }) => {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="
        flex items-center w-full sm:w-80
        border  bg-primary
        rounded-lg px-3 py-3.5
        shadow-sm focus-within:ring-2
        transition-all duration-200
      "
    >
      <input
        type="text"
        placeholder="Search product..."
        aria-label="Search by title"
        onChange={(e) => setSearch(e.target.value)}
        className="
          w-full  outline-none border-none
          pl-2 text-text-secondary
        
        "
      />
      <FaMagnifyingGlass className="w-5 h-5 text-gray-500 dark:text-gray-400" />
    </form>
  );
};

export default SearchInput;
