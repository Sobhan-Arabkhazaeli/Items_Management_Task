import { Select, SelectItem } from "@heroui/react";

interface IBaseSelectProps<T> {
  label: string;
  value: T;
  options: { key: string | number; label: string }[];
  onChange: (value: T) => void;
  className?: string;
}

/**
 * @component BaseSelect
 */
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
      selectedKeys={[String(value)]}
      className={`max-w-xs w-36 ${className || ""}`}
      onChange={(e) => onChange(e.target.value as T)}
      variant="bordered"
      radius="lg"
      classNames={{
        base: "bg-primary rounded-xl text-text-secondary",
        listbox: "bg-bg",
        trigger:
          "shadow-sm border border-gray-300 dark:border-gray-700 hover:border-indigo-400 focus:border-indigo-500",
      }}
    >
      {options.map((opt) => (
        <SelectItem key={opt.key} value={String(opt.key)}>
          {opt.label}
        </SelectItem>
      ))}
    </Select>
  );
};

export default BaseSelect;
