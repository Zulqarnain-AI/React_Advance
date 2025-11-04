import React from 'react';

export default async function  getdata () {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts",{
        methohd:"GET",
    });
    return await response.json()
}