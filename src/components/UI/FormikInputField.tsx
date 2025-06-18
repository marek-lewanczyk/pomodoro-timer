import {ErrorMessage, Field} from "formik";
import type {FormiInputFieldProps} from "@/types/ui.ts";

export default function FormikInputField({
                                             label,
                                             name,
                                             fieldType = "text",
                                             min,
                                             max,
                                         }: FormiInputFieldProps) {
    return (
        <div className="w-full">
            {label?.trim() && (
                <label
                    className="block mb-1 font-vt323 text-sm"
                    htmlFor={name}
                >
                    {label}
                </label>
            )}

            <Field
                id={name}
                type={fieldType}
                name={name}
                min={min}
                max={max}
                className="w-full h-12 font-vt323 text-sm border border-primary px-4 shadow bg-secondary focus:outline-none dark:border-secondary dark:shadow-dark dark:bg-primary"
            />

            <ErrorMessage
                name={name}
                component="div"
                className="text-sm mt-1"
            />
        </div>
    );
}
