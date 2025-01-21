import React from "react";

const ResultDisplay = ({ bmi, status }) => {
    return (
        <div style={{ marginTop: "20px" }}>
            <h2>Your BMI: {bmi}</h2>
            <h3>Status: {status}</h3>
        </div>
    );
};

export default ResultDisplay;
