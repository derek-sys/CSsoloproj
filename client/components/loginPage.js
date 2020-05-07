import React from 'react';
import { useState } from 'react';
import { redirect } from 'react-router-dom';

export default function LoginPage() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const url = '/api/user/register';
    await fetch(url, {
      method: 'POST',
      body: data,
    });

    // .then((res) => res.json())
    // .catch((error) => console.error('Error:', error))
    //  .then((response) => console.log('Success:', response));
  };
  //encType="multipart/form-data"
  return (
    <div>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <label htmlFor="username">Enter username</label>
        <input id="username" name="username" type="text" />
        <label htmlFor="password">Enter password</label>
        <input id="password" name="password" type="password" />
        <button>Login</button>
      </form>
    </div>
  );
}
