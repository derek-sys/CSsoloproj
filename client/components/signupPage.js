import React from 'react';
import { useState } from 'react';

export default function LoginPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const url = '/api/user/register';
    fetch(url, {
      method: 'POST',
      body: data,
    });

    // .then((res) => res.json())
    // .catch((error) => console.error('Error:', error))
    //  .then((response) => console.log('Success:', response));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Enter username</label>
        <input id="username" name="username" type="text" />
        <label htmlFor="password">Enter password</label>
        <input id="password" name="password" type="password" />
        <button type="submit">Sign UP</button>
      </form>
    </div>
  );
}
