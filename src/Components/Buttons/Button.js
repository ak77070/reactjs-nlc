import React from 'react';
import "./style.css"


export const Button = ({ label }) => {
    return (
        <>
            <button className="button homebtn text-uppercase"> {label} </button>
        </>
    )
}
