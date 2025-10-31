import { Select, SelectItem } from "@heroui/react";

interface IBaseSelectProps<T extends string | number | undefined> {
  label: string;
  value: T;
  options: { key: string | number; label: string }[];
  onChange: (value: T) => void;
  className?: string;
}

const BaseSelect = <T extends string | number | undefined>({
  label,
  value,
  options,
  onChange,
  className,
}: IBaseSelectProps<T>) => {
  return (
    <Select
      label={label}
      // selectedKeys expects an iterable (like Set or string[])
      selectedKeys={value ? [String(value)] : []}
      className={`max-w-xs w-36 ${className || ""}`}
      // use onSelectionChange instead of onChange
      onSelectionChange={(keys) => {
        const selected = Array.from(keys)[0] as string;
        onChange(selected as T);
      }}
      variant="bordered"
      radius="lg"
      classNames={{
        base: "text-text",
        label: "text-text-secondary font-medium",
        trigger: "hover:bg-primary/10 transition-all duration-300 rounded-lg",
        listbox: "backdrop-blur-xl bg-surface/80 rounded-lg",
        popoverContent: "backdrop-blur-xl bg-surface/70 rounded-lg",
        selectorIcon: "text-primary",
      }}
    >
      {options.map((opt) => (
        <SelectItem
          key={String(opt.key)}
          className="hover:bg-primary/20 rounded-md transition-all duration-200"
        >
          {opt.label}
        </SelectItem>
      ))}
    </Select>
  );
};

export default BaseSelect;
