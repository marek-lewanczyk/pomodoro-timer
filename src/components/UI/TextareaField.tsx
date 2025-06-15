import type {ChangeEvent} from "react";

interface Props {
    label?: string;
    name: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    className?: string;
    placeholder?: string;
}

export default function TextareaField({
                                          label,
                                          name,
                                          value,
                                          onChange,
                                          className = "",
                                          placeholder,
                                      }: Props) {
    return (
        <div>
            <label htmlFor={name} className="block mb-1">
                {label}
            </label>
            <textarea
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                className={
                    className ||
                    "p-1 w-full resize-y font-vt323 text-sm bg-white text-black border border-black shadow-[3px_3px_0px_black] dark:border-white dark:bg-black dark:text-white dark:shadow-[3px_3px_0px_white] focus:outline-none focus:ring-2 focus:ring-black"
                }
                placeholder={placeholder}
            />
        </div>
    );
}
