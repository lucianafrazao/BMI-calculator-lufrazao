import React from "react";

import style from './BMITable.module.css';

const BMITable = () => {
    return (
        <table className={style.table}>
            <thead>
                <tr className={style.tr}>
                    <th className={style.thd}>BMI Range</th>
                    <th className={style.thd}>Category</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className={style.thd}>Below 18.5</td>
                    <td className={style.thd}>Underweight</td>
                </tr>
                <tr>
                    <td className={style.thd}>18.5 - 24.9</td>
                    <td className={style.thd}>Normal weight</td>
                </tr>
                <tr>
                    <td className={style.thd}>25 - 29.9</td>
                    <td className={style.thd}>Overweight</td>
                </tr>
                <tr>
                    <td className={style.thd}>30 and above</td>
                    <td className={style.thd}>Obesity</td>
                </tr>
            </tbody>
        </table>
    );
};

export default BMITable;
