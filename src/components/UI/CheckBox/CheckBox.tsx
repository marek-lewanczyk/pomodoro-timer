import type { CheckboxProps } from '@/types/ui.ts';

export default function Checkbox({ checked, onChange, className = '' }: CheckboxProps) {
    return (
        <input
            type="checkbox"
            checked={checked}
            onChange={onChange}
            className={`${className} border-primary bg-secondary checked:bg-primary checked:border-primary checked:text-secondary dark:border-secondary dark:bg-primary dark:checked:bg-secondary dark:checked:border-secondary dark:checked:text-secondary dark:shadow-secondary h-6 w-6 cursor-pointer appearance-none border shadow transition duration-100`}
        />
    );
}
