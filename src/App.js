import React, { useRef, useState } from 'react';
// Ovan kan även skrivas som nedanstående
// import React from 'react';
// import { useRef, useState } from 'react';

const ROOT_URL = "http://yoshi.willandskill.eu:8999/api/v1/"
const LOGIN_URL = `${ROOT_URL}auth/api-token-auth/`

function App() {
  const [email, setEmail] = useState("test.user@willandskill.se")
  const [password, setPassword] = useState("js-lesson-10")
  const [token, setToken] = useState(null)

  function login() {
    const payload = {
      email: email, 
      password: password
    }
    // Samma som const payload = { email, password }
    fetch(LOGIN_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    })
    .then(res => res.json())
    .then(data => {
      setToken(data.token)
    })
  }

  return (
    <div>
      <h1>Event App</h1>
      <div>
        <div>
          <label htmlFor="email">Email</label>
          <input 
            name="email" 
            type="email"
            value={email}
            onChange={(event) => setEmail(event.currentTarget.value)}
            placeholder="john.doe@company.com"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input 
            name="password" 
            type="password"
            value={password}
            onChange={(event) => setPassword(event.currentTarget.value)}
          />
        </div>
        <button onClick={login}>Login</button>
      </div>
    </div>
  );
}

export default App;
