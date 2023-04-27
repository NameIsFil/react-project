import { UserNameInput } from "./components/UserNameInput.jsx";
import React, { useState } from "react";

export default function App() {
    const [userName, setUserName] = useState(null);

    function Title() {
        if (userName) {
            return <h1>Welcome to my App, {userName}</h1>;
        } else {
            return <h1>Welcome to my App</h1>;
        }
    }

    return (
        <div>
            <Title />
            <UserNameInput setName={setUserName} />
        </div>
    );
}
