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
                    className="block mb-1 font-vt323 text-sm text-primary"
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
                className="w-full h-12 font-vt323 text-sm border border-black dark:border-white px-4 shadow-[3px_3px_0px_black] dark:shadow-[3px_3px_0px_white] bg-white dark:bg-black text-black dark:text-white focus:outline-none"
            />

            <ErrorMessage
                name={name}
                component="div"
                className="text-red-500 text-sm mt-1"
            />
        </div>
    );
}
