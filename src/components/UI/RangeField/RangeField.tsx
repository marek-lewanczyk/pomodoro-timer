import { Field } from 'formik';

interface RangeFieldProps {
    name: string;
    label: string;
    value: number;
    min?: number;
    max?: number;
}

export default function RangeField({ name, label, value, min = 0, max = 100 }: RangeFieldProps) {
    return (
        <div className="mb-4">
            <label htmlFor={name} className="block mb-1 text-primary dark:text-secondary">
                {label} ({value}%)
            </label>
            <Field
                id={name}
                name={name}
                type="range"
                min={min}
                max={max}
                className="w-full h-2 appearance-none cursor-pointer
                   bg-primary dark:bg-secondary
                   [&::-webkit-slider-thumb]:appearance-none
                   [&::-webkit-slider-thumb]:w-2.5
                   [&::-webkit-slider-thumb]:h-6
                   [&::-webkit-slider-thumb]:bg-secondary
                   [&::-webkit-slider-thumb]:dark:bg-primary
                   [&::-webkit-slider-thumb]:border-2
                   [&::-webkit-slider-thumb]:border-primary
                   [&::-webkit-slider-thumb]:dark:border-secondary
                   [&::-webkit-slider-thumb]:shadow-[3px_3px_0_var(--tw-shadow-color)]
                   [&::-webkit-slider-thumb]:shadow-black
                   [&::-moz-range-thumb]:w-2.5
                   [&::-moz-range-thumb]:h-6
                   [&::-moz-range-thumb]:bg-secondary
                   [&::-moz-range-thumb]:dark:bg-primary
                   [&::-moz-range-thumb]:border-2
                   [&::-moz-range-thumb]:border-primary
                   [&::-moz-range-thumb]:dark:border-secondary
                   "
            />
        </div>
    );
}
