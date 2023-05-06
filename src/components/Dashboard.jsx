import { useState } from 'react';

export async function FetchData() {
    const [usersResponse, postsResponse] =
        await Promise.all([
            fetch(
                'https://jsonplaceholder.typicode.com/users',
            ),
            fetch(
                'https://jsonplaceholder.typicode.com/posts'
            ),
        ]);
    const [usersData, postsData] = await Promise.all([
        usersResponse.json(),
        postsResponse.json(),
    ]);

    function renderButtons(array) {
        array.forEach((user) => {
            return (
                <>
                    <button> { user.name }</button>
                </>
            )
        });
    }

    return renderButtons(usersData);
}