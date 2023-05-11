import { useState, useEffect } from 'react';

export function Dashboard() {
    const [usersData, setUsersData] = useState();

    useEffect(() => {
        async function fetchData() {
            const [usersResponse] =
                await Promise.all([
                    fetch(
                        'https://jsonplaceholder.typicode.com/users',
                    )
                ]);
            const [users] = await Promise.all([
                usersResponse.json(),
            ]);

            setUsersData(users);
        }
        fetchData();
    }, []);

    if (!usersData) {
        return null;
    }
    return usersData.map((user) =>
        <button onClick={ () => UserPosts(user.id) } key={ user.id }>{ user.name }</button>
    );
}

async function UserPosts(userId) {
    const [postsData, setPostsData] = useState();

    useEffect(() => {
        async function fetchData(userId) {
            const [postsResponse] =
                await Promise.all([
                    fetch(
                        'https://jsonplaceholder.typicode.com/posts?userId=' + userId.toString(),
                    )
                ]);
            const [posts] = await Promise.all([
                postsResponse.json(),
            ]);

            setPostsData(posts);
        }
        fetchData();
    }, []);

    if (!postsData) {
        return null;
    }
    return postsData.map((post) => (
        <>
            <p key={ post.id }>{ post.name }</p>
        </>
    ));
}