import React, { useState } from "react";

export function UserNameInput(props) {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (event) => {
        console.log(event.target.value);
        setInputValue(event.target.value);
    };

    const handleDisplayNameClick = () => {
        props.setName(inputValue);
    };

    return (
        <div>
            <label>your name:</label>
            <input onInput={handleInputChange} value={inputValue} />
            <button onClick={handleDisplayNameClick}>display name</button>
        </div>
    );
}

