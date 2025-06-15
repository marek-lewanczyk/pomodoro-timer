interface CheckboxProps {
    checked: boolean;
    onChange: () => void;
    className?: string;
}

export default function Checkbox({ checked, onChange, className = "" }: CheckboxProps) {
    return (
        <input
            type="checkbox"
            checked={checked}
            onChange={onChange}
            className={
                className +
                " appearance-none w-6 h-6 border border-black bg-white checked:bg-black checked:border-black checked:text-white cursor-pointer shadow-[3px_3px_0px_black] transition duration-100"
            }
        />
    );
}
