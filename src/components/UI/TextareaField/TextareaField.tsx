import type { TextareaFieldProps } from '@/types/ui.ts';

export default function TextareaField({ label, name, value, onChange, className = '', placeholder }: TextareaFieldProps) {
    return (
        <div>
            <label htmlFor={name} className="mb-1 block">
                {label}
            </label>
            <textarea
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                className={
                    className ||
                    'font-vt323 bg-secondary border-secondary focus:ring-primary w-full resize-y border p-1 text-sm shadow focus:ring-2 focus:outline-none'
                }
                placeholder={placeholder}
            />
        </div>
    );
}
