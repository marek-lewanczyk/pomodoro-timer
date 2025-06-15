import {ErrorMessage, Field} from "formik";

interface Props {
    label: string;
    name: string;
    fieldType: string;
    min?: number;
    max?: number;
}

export default function FormikInputField({ label, name, fieldType, min, max }: Props) {
    return (
        <div>
            <label className="block mb-1" htmlFor={name}>{label}</label>
            <Field
                id={name}
                type={fieldType}
                name={name}
                min={min}
                max={max}
                className="w-full border border-black dark:border-white p-2 shadow-[3px_3px_0px_black] dark:shadow-[3px_3px_0px_white]"
            />
            <ErrorMessage name={name} component="div" className="text-red-500 text-sm" />
        </div>
    );
}
