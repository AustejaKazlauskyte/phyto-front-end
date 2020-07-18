/*
import React, { useState, useEffect } from 'react';


function PostRequestHooks() {
    const [postId, setPostId] = useState(null);

    useEffect(() => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            /!*body: JSON.stringify({ title: 'Random text' }*!/
        };
        fetch('http://localhost:8080/api/herbs', requestOptions)
            .then(response => response.json())
            .then(data => setPostId(data.id));
    }, []);
}

export { PostRequestHooks };
*/
