import type {TextareaFieldProps} from "@/types/ui.ts";

export default function TextareaField({
                                          label,
                                          name,
                                          value,
                                          onChange,
                                          className = "",
                                          placeholder,
                                      }: TextareaFieldProps) {
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
                    "p-1 w-full resize-y font-vt323 text-sm bg-secondary border border-secondary shadow focus:outline-none focus:ring-2 focus:ring-primary"
                }
                placeholder={placeholder}
            />
        </div>
    );
}
