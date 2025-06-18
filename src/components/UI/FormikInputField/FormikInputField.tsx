import { ErrorMessage, Field } from 'formik';
import type { FormiInputFieldProps } from '@/types/ui.ts';

export default function FormikInputField({ label, name, fieldType = 'text', min, max }: FormiInputFieldProps) {
    return (
        <div className="w-full">
            {label?.trim() && (
                <label className="font-vt323 mb-1 block text-sm" htmlFor={name}>
                    {label}
                </label>
            )}

            <Field
                id={name}
                type={fieldType}
                name={name}
                min={min}
                max={max}
                className="font-vt323 border-primary bg-secondary dark:border-secondary dark:shadow-dark dark:bg-primary h-12 w-full border px-4 text-sm shadow focus:outline-none"
            />

            <ErrorMessage name={name} component="div" className="mt-1 text-sm" />
        </div>
    );
}
