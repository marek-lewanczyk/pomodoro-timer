import type { CheckboxProps } from '@/types/ui.ts';

export default function Checkbox({ checked, onChange, className = '' }: CheckboxProps) {
  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className={`${className} appearance-none w-6 h-6 border border-primary bg-secondary checked:bg-primary checked:border-primary checked:text-secondary cursor-pointer shadow transition duration-100 dark:border-secondary dark:bg-primary dark:checked:bg-secondary dark:checked:border-secondary dark:checked:text-secondary dark:shadow-secondary`}
    />
  );
}
