import React from 'react';

export default function LoginPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('event', event);
    const form = event.target;
    console.log(form);
    const data = new FormData(form);
    for (var [key, value] of data.entries()) {
      console.log(key, value);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Enter username</label>
        <input id="username" name="username" type="text" />
        <label htmlFor="password">Enter password</label>
        <input id="password" name="password" type="password" />
        <button>Login</button>
      </form>
    </div>
  );
}
