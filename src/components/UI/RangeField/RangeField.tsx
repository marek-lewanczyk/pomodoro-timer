import {Field} from "formik";
import "./RangeField.scss"; // <- dodaj ten import, jeśli nie masz jeszcze, utwórz plik

interface RangeFieldProps {
    name: string;
    label: string;
    value: number;
    min?: number;
    max?: number;
}

export default function RangeField({
                                       name,
                                       label,
                                       value,
                                       min = 0,
                                       max = 100,
                                   }: RangeFieldProps) {
    return (
        <div className="range-field">
            <label htmlFor={name} className="range-field__label">
                {label} ({value}%)
            </label>
            <Field
                id={name}
                name={name}
                type="range"
                min={min}
                max={max}
                className="range-field__slider"
            />
        </div>
    );
}
