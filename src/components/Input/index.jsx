import React from "react";
import style from '../Calculator/Calculator.module.css';

const InputField = ({ label, value, onChange, placeholder }) => {
    return (
        <div style={{ margin: "10px" }}>
            <label>
                {label}
                <input
                    type="number"
                    className={style.input}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                />
            </label>
        </div>
    );
};

export default InputField;
