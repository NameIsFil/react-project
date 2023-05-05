import { useState } from 'react';

export function MyButton() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>Button:</h1>
            <button onClick={handleClick}>
                Clicked {count} times
            </button>
        </div>
    );
}