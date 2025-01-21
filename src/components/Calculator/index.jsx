import React, { useState } from "react";
import InputField from "../Input";
import ResultDisplay from "../Result";
import BMITable from "../BMITable";
import style from './Calculator.module.css';

const BMICalculator = () => {
    const [weight, setWeight] = useState(""); // User's weight
    const [height, setHeight] = useState(""); // User's height
    const [bmi, setBmi] = useState(null); // Calculated BMI
    const [status, setStatus] = useState(""); // BMI category

    const calculateBMI = () => {
        if (weight && height) {
            const heightInMeters = height / 100;
            const bmiValue = (weight / (heightInMeters ** 2)).toFixed(1);
            setBmi(bmiValue);

            if (bmiValue < 18.5) setStatus("Underweight");
            else if (bmiValue >= 18.5 && bmiValue < 24.9) setStatus("Normal weight");
            else if (bmiValue >= 25 && bmiValue < 29.9) setStatus("Overweight");
            else setStatus("Obesity");
        } else {
            alert("Please enter both weight and height.");
        }
    };

    return (
        <div className={style.container}>
            <h1 className={style.title}>BMI Calculator</h1>
            <InputField
                label="Weight (kg): "
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Enter your weight"
            />
            <InputField
                label="Height (cm): "
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="Enter your height"
            />
            <button className={style.button} onClick={calculateBMI}>Calculate BMI</button>
            {/* Display BMI result and table */}
            {bmi && (
                <>
                    <ResultDisplay bmi={bmi} status={status} />
                    <BMITable />
                </>
            )}
        </div>
    );
};

export default BMICalculator;
