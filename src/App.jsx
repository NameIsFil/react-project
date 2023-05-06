import { UserNameInput } from "./components/UserNameInput.jsx";
import { FetchData } from "./components/Dashboard.jsx";
import { TicTacToe } from "./components/TicTacToe.jsx";
import { MyButton } from "./components/MyButton.jsx";
import { users } from "./components/users.js";
import "./styles.css";
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

    function RenderUsers() {
        return (
            <div>
                <h1>Users:</h1>
                    {users.map((user) => (
                    <div key={user.id}>
                        {user.name} age: {user.age}
                    </div>
                ))}
            </div>
        )
    }

    return (
        <div>
            <Title />
            <UserNameInput setName={setUserName} />
            <RenderUsers />
            <MyButton />
            <MyButton />
            <br />
            <TicTacToe />
            <FetchData />
        </div>
    );
}
