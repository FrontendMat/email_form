import { memo } from "react";

export const Input = memo((props) => {
    const { value, onChange, type, placeholder } = props;

    const onInputChange = (e) => {
        onChange(e.target.value);
    };

    return (
        <input
            className="w-full border p-2 rounded outline-none focus:border-orange-600"
            value={value}
            onChange={onInputChange}
            placeholder={placeholder}
            type={type}
        />
    );
});
